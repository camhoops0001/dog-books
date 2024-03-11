# This is a WebApi meant to utilize two separate backend API's.

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

## Things I would update first

- I would populate the dog breeds you can select into an actual dropdown list, or seperating them so you could see all of the breed options in 3 columns as opposed to listing them single file.
- I would give the user the ability to pick from 5 books based on the returned results instead of just one.
- I would hook the "Save Book" functionality up with prop, event bus, or Vuex store so you could begin to curate longer list of books and collections with various breeds and books, instead of passing them as URL parameters. That was a decision made entirely because of time constraints
- Would also hook this up to it's own DB. You could either save all of the book information so you didn't have to call out to the other API's once it's saved.. You could save the breed keys, book ID's, and author ID's if you'd rather populate the saved books from the two backend api's when starting the application
- I chose the easiest way to make it look slightly presentable, this would have to be refactored to end up being responsive for desktop, laptop, mobile, and tablet. Would also utilize more standard CSS practices, I threw quite a few "<br>" tags that I normally would handle with margin/padding, more implicit containers
- FavoriteDog.cs could potentially benefit from being broken into seperate components. With the artificial delay you could break out the "we're finding your book for you" section into it's own component


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
