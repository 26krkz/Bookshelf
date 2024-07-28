import styles from "./page.module.css";
import Search from "./_components/Search";
import CardList from "./_components/CardList";
import { cardItems } from "./constants";

export default function Home() {
  return (
    <main className={styles.mainContents}>
      <div className={styles.contentsInner}>
        <Search />
        <CardList cards={cardItems} />
      </div>
    </main>
  );
}
