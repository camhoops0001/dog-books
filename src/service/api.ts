import axios from 'axios';
import { DogBreedApiResponse, DogImageApiResponse } from '@/@types/DogApi';
import { OpenLibraryResponse, OpenLibraryBookResponse, ParsedBookResponse, OpenLibraryAuthor } from '@/@types/BookApi'
import {DogBreeds } from '@/@types/DogApi';


const bookClient = axios.create({ baseURL: 'https://openlibrary.org' });
const dogClient = axios.create({ baseURL: 'https://dog.ceo/api' });

export async function getDogBreeds(): Promise<DogBreedApiResponse> {
  const response = await dogClient.get('/breeds/list/all');
  return response.data;
}

export async function getDogPictureByBreed(breed: string): Promise<DogImageApiResponse> {
  const response = await dogClient.get(`/breed/${breed}/images/random`);
  return response.data;
}

export async function getRandomDogPicture(): Promise<DogImageApiResponse> {
  const response = await dogClient.get(`/breeds/image/random`);
  return response.data;
}

export async function searchBooksByDog(breed: string): Promise<OpenLibraryResponse> {
  const response = await bookClient.get(`/search.json?q=${breed}`);
  return response.data;

}

export async function getAuthorandTitlebyID(bookId: string): Promise<OpenLibraryBookResponse> {
  const response = await bookClient.get(`/books/${bookId}.json`);
  return response.data;

}


export async function getAuthorbyAuthorID(authorId: string): Promise<OpenLibraryAuthor> {
  const response = await bookClient.get(`${authorId}.json`);
  return response.data;

}
// const response = await bookClient.get(`authors.json?q=${bookId}`);
// return response.data;
export function parseOpenLibraryResponse(response: OpenLibraryResponse): string[] {
  const firstFiveSeeds = response.docs.slice(0, 5).flatMap((doc) => doc.seed.slice(0, 5));
  return firstFiveSeeds.map((seed) => seed.slice(5)); // Extract values after "/books/"
}

export function parseOpenLibraryBookResponse(response: OpenLibraryBookResponse): ParsedBookResponse {
  return {
    title: response.title,
    full_title: response.full_title,
    authorKey: response.authors[0].key,
  };
}



//Work on the OpenLibrary stuff next, keep utilizing gemini that shits cash

// export async function getApi2Data(): Promise<Api2Response> {
//   const response = await dogClient.get(`/details`);
//   return response.data;
// }