import { BookCards } from "@/types";
import Card from "../Card";

export default function CardList({ cards, listTitle }: { cards: BookCards; listTitle: string }) {
  return (
    <ul>
      {cards.map((card) => {
        return <Card key={card.id} card={card} listTitle={listTitle} />;
      })}
    </ul>
  );
}
