"use server";
import BookCardList from "@/_components/BookCardList";
import Heading from "@/_components/Heading";
import getBookshelfList from "@/_services/getBookshelfList";
import getFavoriteList from "@/_services/getFavoriteList";
import styles from "./styles.module.css";

type Params = {
  user: string;
};

export default async function Page({ params }: { params: Params }) {
  const userName = decodeURIComponent(params.user);
  const cardItems = await getBookshelfList();
  const favoriteCardList = await getFavoriteList().then((books) => books.map((book) => book.id));
  const bookshelfList = await getBookshelfList().then((books) => books.map((book) => book.id));
  // TODO: user page用のBookCardListを作る
  return (
    <>
      <Heading as="h2">{`${userName}の本棚`}</Heading>
      {!!cardItems.length ? (
        <BookCardList cards={cardItems} favoriteCardList={favoriteCardList} bookshelfList={bookshelfList} />
      ) : (
        <div className={styles.noDataText}>まだ本棚に登録された本がありません。</div>
      )}
    </>
  );
}
