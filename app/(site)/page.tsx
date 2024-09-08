import styles from "./page.module.css";
import SearchContainer from "@/_components/SearchContainer";
import getFavoriteList from "@/_services/getFavoriteList";

export default async function Home() {
  const favoriteCardList = await getFavoriteList().then((books) => books.map((book) => book.id));
  return (
    <main className={styles.mainContents}>
      <div className={styles.contentsInner}>
        <SearchContainer favoriteCardList={favoriteCardList} />
      </div>
    </main>
  );
}
