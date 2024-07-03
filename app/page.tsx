import styles from "./page.module.css";
import Search from "./ui/Search";
import CardList from "./ui/CardList";
import { cardItems } from "./constants";

export default function Home() {
  return (
    <main className={styles.main}>
      <Search />
      <CardList cards={cardItems} />
    </main>
  );
}
