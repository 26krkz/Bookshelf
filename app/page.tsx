import styles from "./page.module.css";
import Search from "./ui/Search";
import CardList from "./ui/CardList";
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
