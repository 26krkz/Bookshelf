export type BookInfo = {
  cardId: string;
  title: string;
  author: string;
  imageUrl: string;
  description: string;
  favorite: boolean;
};

export type Card = BookInfo;

export type Cards = Card[];

export type ModalInfo = Omit<Card, "onClick"> | null;
