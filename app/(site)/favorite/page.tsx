"use client";
import Heading from "@/_components/Heading";
import { cardItems } from "@/constants";
import CardList from "@/_components/CardList";
import styles from "./styles.module.css";

export default function Page() {
  return (
    <>
      <Heading as="h2" className={styles.heading}>
        お気に入りリスト
      </Heading>
      <CardList cards={cardItems} listTitle="お気に入りリスト" />
    </>
  );
}
