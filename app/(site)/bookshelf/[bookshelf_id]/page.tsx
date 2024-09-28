"use server";
import BookCardList from "@/_components/BookCardList";
import Heading from "@/_components/Heading";
import getBookshelfList from "@/_services/getBookshelfList";
import getFavoriteList from "@/_services/getFavoriteList";
import styles from "./styles.module.css";
import getUserData from "@/_services/getUserData";

type Params = {
  bookshelf_id: string;
};

export default async function Page({ params }: { params: Params }) {
  const bookshelfId = params.bookshelf_id;
  const user = await getUserData({ bookshelfId });
  const cardItems = await getBookshelfList({ bookshelfId });
  const favoriteCardList = await getFavoriteList().then((books) => books.map((book) => book.id));
  const bookshelfList = await getBookshelfList().then((books) => books.map((book) => book.id));
  // TODO: user page用のBookCardListを作る
  return (
    <>
      <Heading as="h2">{`${user?.name}の本棚`}</Heading>
      {!!cardItems.length ? (
        <BookCardList cards={cardItems} favoriteCardList={favoriteCardList} bookshelfList={bookshelfList} />
      ) : (
        <div className={styles.noDataText}>まだ本棚に登録された本がありません。</div>
      )}
    </>
  );
}
