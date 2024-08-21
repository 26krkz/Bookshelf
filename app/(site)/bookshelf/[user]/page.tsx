"use server";
import BookCardList from "@/_components/BookCardList";
import Heading from "@/_components/Heading";
import getBookshelfList from "@/_services/getBookshelfList";

export default async function Page() {
  const userId = "003";
  const userName = "サンプルさん";
  const cardItems = await getBookshelfList({ userId });
  return (
    <>
      <Heading as="h2">{`${userName}の本棚`}</Heading>
      <BookCardList cards={cardItems} />
    </>
  );
}
