# This is a WebApi meant to utilize two seperate backend API's.

Dog API 
https://dog.ceo/dog-api/
Utilizing Dog API to populate a breed list, grab relevant pictures of dogs from user breed selection, and random image generation as well

-Breed list
-Images by breed
-Random dog image generator

OpenLibrary
https://openlibrary.org/developers/api
Utilizing OpenLibraries API to gather information about books that relate to different breed types.

-Book Search
-Search Inside Text Search
-Author Search

You pick your favorite dog breed, and the application will give you a book that includes the specific breed you selected. It's built to eventually be able to let the user choose between "X" amount of books that we display. 

All of the breeds listed have a direct match of some sort with mentions in a book. 
(Right now Beagles, and one or two others are still erroring when trying to retrieve a book to save, something to look into if taking this further. The structure of a couple of the breeds returns must be slightly different then the rest)

It is currently hooked up to give you the ability to select a breed and return a single book that you have the option to save to your collection.

A few of the breeds have 100+ results, so if I wanted to spend the time on it later, we could implement a paginator and display all of the books related specific breeds!

We could specify searching by author, by the breed being mentioned somewhere in the test of the book, in the title... etc.. 

A lot of cool possibilities here.



