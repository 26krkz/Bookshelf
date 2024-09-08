"use client";
import { BookCard } from "@/types";
import styles from "./styles.module.css";
import Image from "next/image";
import { Dialog } from "@radix-ui/themes";

export const BookViewModal = ({ card }: { card: BookCard }) => {
  const { title, authors, description, imageUrl } = card;
  return (
    <Dialog.Content>
      <div className={styles.container}>
        <div>
          <div className={styles.imageWrapper}>
            <Image src={imageUrl} alt="本の画像" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.image} />
          </div>
        </div>
        <div className={styles.modalTextArea}>
          <Dialog.Title>{title}</Dialog.Title>
          <p className={styles.author}>{authors?.[0]}</p>
          <Dialog.Description className={styles.description}>{description}</Dialog.Description>
          <Dialog.Close>
            <button>閉じる</button>
          </Dialog.Close>
        </div>
      </div>
    </Dialog.Content>
  );
};