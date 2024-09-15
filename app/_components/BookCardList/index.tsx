"use client";
import BookCard from "../BookCard";
import { ModalContainer } from "../ModalContainer";
import type { BookCards } from "@/types";
import styles from "./styles.module.css";
import { BookViewModal } from "../BookViewModal";
import { SessionProvider } from "next-auth/react";

export default function BookCardList({ cards, favoriteCardList, bookshelfList }: { cards: BookCards; favoriteCardList: string[]; bookshelfList: string[] }) {
  return (
    <>
      <SessionProvider>
        <ul className={styles.list}>
          {cards.map((card) => {
            const favoriteStatus = favoriteCardList.includes(card.id);
            const addBookshelf = bookshelfList.includes(card.id);
            return (
              <li key={card.id}>
                {/* カードがNo Imageだった場合タイトルを表示する */}
                <ModalContainer content={() => <BookViewModal card={card} favoriteStatus={favoriteStatus} addBookshelf={addBookshelf} />}>
                  <BookCard card={card} />
                </ModalContainer>
              </li>
            );
          })}
        </ul>
      </SessionProvider>
    </>
  );
}
