"use client";
import Card from "../Card";
import Modal from "../Modal";
import { useModal } from "../Modal/useModal";
import type { Cards } from "@/app/types";
import styles from "./styles.module.css";

type Props = {
  cards: Cards;
};

export default function CardList(props: Props) {
  const { open, handleOpenModal, handleCloseModal, modalInfo } = useModal();
  const { cards } = props;
  return (
    <>
      <ul className={styles.list}>
        {cards.map((card) => {
          return (
            <li key={card.cardId}>
              <Card {...card} onClick={() => handleOpenModal(card)} />
            </li>
          );
        })}
      </ul>
      <Modal open={open} handleCloseModal={handleCloseModal} modalInfo={modalInfo} />
    </>
  );
}
