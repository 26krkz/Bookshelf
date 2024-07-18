export type Card = {
  cardId: string;
  title: string;
  author: string;
  imageUrl: string;
  description: string;
  favorite: boolean;
  onClick?: () => void;
};
export type Cards = Card[];
