export interface DogBreedApiResponse {
  message: DogBreeds;
  status: string;
}

export interface DogBreeds {
  [breed: string]: string[]; // Using index signature for dynamic breeds
}

export interface DogImageApiResponse {
  message: string; // URL of the dog image
  status: string;
}