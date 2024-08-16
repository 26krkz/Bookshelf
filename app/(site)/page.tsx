"use client";
import styles from "./page.module.css";
import Search from "@/_components/Search";
import BookCardList from "@/_components/BookCardList";
import { useFormState } from "react-dom";
import getSearchResult from "@/_services/getSearchResult";
import { BookCards } from "@/types";

export default function Home() {
  const [state, formAction] = useFormState(getSearchResult, []);
  console.log(state);
  return (
    <main className={styles.mainContents}>
      <div className={styles.contentsInner}>
        <Search formAction={formAction} />
        <BookCardList cards={state as BookCards} />
      </div>
    </main>
  );
}
