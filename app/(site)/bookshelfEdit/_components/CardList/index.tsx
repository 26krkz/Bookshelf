"use client";
import { BookCards } from "@/types";
import Card from "../Card";
import { SessionProvider } from "next-auth/react";

export default function CardList({ cards }: { cards: BookCards }) {
  return (
    <SessionProvider>
      <ul>
        {cards.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </ul>
    </SessionProvider>
  );
}
