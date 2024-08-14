export type BookInfo = {
  id: string;
  title: string;
  authors: string[];
  imageUrl: string;
  description: string;
  favorite?: boolean;
};

export type BookCard = BookInfo;

export type BookCards = BookCard[];

export type GoogleBook = {
  id: string;
  etag: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    industryIdentifiers: {
      type: string;
      identifier: string;
    }[];
    mainCategory: string;
    categories: string[];
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
  };
};

export type GoogleBooksInfo = GoogleBook[] | [];
