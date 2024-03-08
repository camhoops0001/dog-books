export interface OpenLibraryResponse {
  numFound: number;
  start: number;
  numFoundExact: boolean;
  docs: { seed: string[] }[];
}

export interface OpenLibraryBookResponse {
  title: string;
  full_title: string;
  authors: { key: string }[];
}

export interface ParsedBookResponse {
  title: string;
  full_title: string;
  authorKey: string;
}

export interface OpenLibraryAuthor {
  type: { key: string };
  name: string;
  key: string;
}

export interface SavedBooks {
  title: string
  author: string
}