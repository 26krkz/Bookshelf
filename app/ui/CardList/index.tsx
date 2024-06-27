import Card from "../Card";
import type { Cards } from "@/app/types";
import styles from "./styles.module.css";

type Props = {
  cards: Cards;
};

export default function CardList(props: Props) {
  const { cards } = props;
  return (
    <ul className={styles.list}>
      {cards.map((card) => {
        return <Card key={card.cardId} {...card} />;
      })}
    </ul>
  );
}
