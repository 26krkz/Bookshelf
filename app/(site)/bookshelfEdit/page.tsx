"use client";
import CardList from "@/_components/CardList";
import Heading from "@/_components/Heading";
import { cardItems } from "@/constants";

export default function Page() {
  return (
    <>
      <Heading as="h2">本棚を編集</Heading>
      <CardList listTitle="本棚" cards={cardItems} />
    </>
  );
}
