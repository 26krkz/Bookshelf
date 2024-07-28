"use client";
import * as React from "react";
import type { Card } from "@/app/types";
import Image from "next/image";

export default function Card({ card }: { card: Card }) {
  const { title, author } = card;
  return (
    // radix-uiのカードコンポーネントを追加する
    <div>
      <div>
        <p>{title}</p>
        <p>{author}</p>
      </div>
      <Image src="/dummy-image.jpeg" height="300" alt="本の画像" />
    </div>
  );
}
