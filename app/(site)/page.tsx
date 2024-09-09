import styles from "./page.module.css";
import SearchContainer from "@/_components/SearchContainer";
import getBookshelfList from "@/_services/getBookshelfList";
import getFavoriteList from "@/_services/getFavoriteList";

export default async function Home() {
  const favoriteCardList = await getFavoriteList().then((books) => books.map((book) => book.id));
  const bookshelfList = await getBookshelfList().then((books) => books.map((book) => book.id));
  return (
    <main className={styles.mainContents}>
      <div className={styles.contentsInner}>
        <SearchContainer favoriteCardList={favoriteCardList} bookshelfList={bookshelfList} />
      </div>
    </main>
  );
}
