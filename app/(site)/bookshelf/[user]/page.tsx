import BookCardList from "@/_components/BookCardList";
import Heading from "@/_components/Heading";
import { cardItems } from "@/constants";

type Params = { user: string };
export default function Page({ params }: { params: Params }) {
  return (
    <>
      <Heading as="h2">{`${params.user}の本棚`}</Heading>
      <BookCardList cards={cardItems} />
    </>
  );
}
