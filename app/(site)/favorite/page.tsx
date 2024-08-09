"use client";
import Heading from "@/_components/Heading";
import { cardItems } from "@/constants";
import styles from "./styles.module.css";
import { ModalContainer } from "@/_components/ModalContainer";
import FavoriteCard from "./_components/FavoriteCard";
import { FavoriteBookViewModal } from "./_components/FavoriteBookViewModal";

export default function Page() {
  return (
    <>
      <Heading as="h2">お気に入りリスト</Heading>
      <ul className={styles.list}>
        {cardItems.map((card) => {
          return (
            <li key={card.cardId}>
              <ModalContainer content={() => <FavoriteBookViewModal card={card} />}>
                <FavoriteCard card={card} />
              </ModalContainer>
            </li>
          );
        })}
      </ul>
    </>
  );
}
