import styles from "./page.module.css";
import Search from "@/_components/Search";
import BookCardList from "@/_components/BookCardList";
import { cardItems } from "@/constants";

export default function Home() {
  return (
    <main className={styles.mainContents}>
      <div className={styles.contentsInner}>
        <Search />
        <BookCardList cards={cardItems} />
      </div>
    </main>
  );
}
