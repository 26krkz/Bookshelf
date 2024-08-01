"use client";
import * as React from "react";
import type { Card } from "@/app/types";
import Image from "next/image";
import { Card as RadixCard } from "@radix-ui/themes";
import styles from "./styles.module.css";

export default function Card({ card }: { card: Card }) {
  // const { photoUrl } = card;
  return (
    <RadixCard className={styles.card}>
      <div className={styles.cardContainer}>
        <div className={styles.imageWrapper}>
          <Image src="/dummy-image.jpeg" fill alt="本の画像" className={styles.image} />
        </div>
      </div>
    </RadixCard>
  );
}
