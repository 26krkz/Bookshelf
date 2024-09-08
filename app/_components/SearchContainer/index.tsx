"use client";
import { BookCards } from "@/types";
import BookCardList from "../BookCardList";
import Search from "../Search";
import { useFormState } from "react-dom";
import getSearchResult from "@/_services/getSearchResult";

export default function SearchContainer({ favoriteCardList }: { favoriteCardList: string[] }) {
  const [state, formAction] = useFormState(getSearchResult, []);
  return (
    <>
      <Search formAction={formAction} />
      <BookCardList cards={state as BookCards} favoriteCardList={favoriteCardList} />
    </>
  );
}
