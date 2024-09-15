"use server";
import Heading from "@/_components/Heading";
import styles from "./styles.module.css";
import getFavoriteList from "@/_services/getFavoriteList";
import CardList from "./_components/CardList";
import { notFound } from "next/navigation";
import { getServerSession } from "@/lib/auth";

export default async function Page() {
  const session = await getServerSession();
  if (!session || !session.user) {
    notFound();
  }
  const cardItems = await getFavoriteList();
  return (
    <>
      <Heading as="h2" className={styles.heading}>
        お気に入りリスト
      </Heading>
      {!!cardItems.length ? <CardList cards={cardItems} /> : <div className={styles.noDataText}>まだお気に入り登録された本がありません。</div>}
    </>
  );
}
