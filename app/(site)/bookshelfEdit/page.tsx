"use server";
import Heading from "@/_components/Heading";
import getBookshelfList from "@/_services/getBookshelfList";
import CardList from "./_components/CardList";

export default async function Page() {
  const userId = "003";
  const cardItems = await getBookshelfList();
  return (
    <>
      <Heading as="h2">本棚を編集</Heading>
      <CardList cards={cardItems} />
    </>
  );
}
