"use client";
import Card from "../Card";
import Modal from "../Modal";
import type { Cards } from "@/app/types";
import styles from "./styles.module.css";

export default function CardList({ cards }: { cards: Cards }) {
  return (
    <>
      <ul className={styles.list}>
        {cards.map((card) => {
          return (
            <li key={card.cardId}>
              <Modal card={card}>
                <Card card={card} />
              </Modal>
            </li>
          );
        })}
      </ul>
    </>
  );
}
