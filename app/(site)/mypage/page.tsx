import CardList from "@/_components/CardList";
import { cardItems } from "@/constants";

export default function Page() {
  return (
    <>
      <h2>My Page</h2>
      <CardList cards={cardItems} />
    </>
  );
}
