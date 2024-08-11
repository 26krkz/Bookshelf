export type BookInfo = {
  cardId: string;
  title: string;
  author: string;
  imageUrl: string;
  description: string;
  favorite: boolean;
};

export type BookCard = BookInfo;

export type BookCards = BookCard[];
