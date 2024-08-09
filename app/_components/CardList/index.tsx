"use client";
import Card from "../Card";
import { ModalContainer } from "../ModalContainer";
import type { Cards } from "@/types";
import styles from "./styles.module.css";
import { BookViewmodal } from "../BookViewModal";

export default function CardList({ cards }: { cards: Cards }) {
  return (
    <>
      <ul className={styles.list}>
        {cards.map((card) => {
          return (
            <li key={card.cardId}>
              <ModalContainer content={() => <BookViewmodal card={card} />}>
                <Card card={card} />
              </ModalContainer>
            </li>
          );
        })}
      </ul>
    </>
  );
}
