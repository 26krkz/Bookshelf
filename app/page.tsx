import Link from "next/link";
import styles from "./page.module.css";
import Search from "./ui/Search";
import CardList from "./ui/CardList";
import { cardItems } from "./constants";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Link className={styles.headerLink} href="/">
          <h1>Bookshelf</h1>
          <Search />
          <CardList cards={cardItems} />
        </Link>
      </header>
    </main>
  );
}
