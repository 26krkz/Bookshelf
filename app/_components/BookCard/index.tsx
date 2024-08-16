"use client";
import * as React from "react";
import type { BookCard } from "@/types";
import Image from "next/image";
import { Card as RadixCard } from "@radix-ui/themes";
import styles from "./styles.module.css";
import clsx from "clsx";

type CardSize = "small" | "middle" | "large";

export default function BookCard({ card, cardSize = "large" }: { card: BookCard; cardSize?: CardSize }) {
  const { imageUrl } = card;
  return (
    <RadixCard className={styles.card}>
      <div className={clsx(styles.cardContainer, styles[cardSize])}>
        <div className={styles.imageWrapper}>
          <Image src={imageUrl} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt="本の画像" className={styles.image} />
        </div>
      </div>
    </RadixCard>
  );
}
