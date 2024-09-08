"use server";
import Heading from "@/_components/Heading";
import CardList from "@/_components/CardList";
import styles from "./styles.module.css";
import getFavoriteList from "@/_services/getFavoriteList";

export default async function Page() {
  const cardItems = await getFavoriteList();
  return (
    <>
      <Heading as="h2" className={styles.heading}>
        お気に入りリスト
      </Heading>
      <CardList cards={cardItems} listTitle="お気に入りリスト" />
    </>
  );
}
