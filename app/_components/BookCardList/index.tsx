"use client";
import BookCard from "../BookCard";
import { ModalContainer } from "../ModalContainer";
import type { BookCards } from "@/types";
import styles from "./styles.module.css";
import { BookViewModal } from "../BookViewModal";

export default function BookCardList({ cards }: { cards: BookCards }) {
  return (
    <>
      <ul className={styles.list}>
        {cards.map((card) => {
          return (
            <li key={card.id}>
              <ModalContainer content={() => <BookViewModal card={card} />}>
                <BookCard card={card} />
              </ModalContainer>
            </li>
          );
        })}
      </ul>
    </>
  );
}
