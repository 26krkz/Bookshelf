import { BookCards } from "@/types";
import Card from "../Card";

export default function CardList({ cards }: { cards: BookCards }) {
  return (
    <ul>
      {cards.map((card) => {
        return <Card key={card.id} card={card} />;
      })}
    </ul>
  );
}
