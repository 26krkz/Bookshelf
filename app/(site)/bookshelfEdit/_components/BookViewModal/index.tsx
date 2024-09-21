"use client";
import { BookCard } from "@/types";
import styles from "./styles.module.css";
import Image from "next/image";
import { ChevronDownIcon, Dialog } from "@radix-ui/themes";
import FavoriteButtonContainer from "@/_components/FavoriteButtonContainer";
import Button from "@/_components/Button";
import { ChevronUpIcon, Cross1Icon } from "@radix-ui/react-icons";
import { useState } from "react";
import clsx from "clsx";

export const BookViewModal = ({ card, favoriteStatus = false }: { card: BookCard; favoriteStatus?: boolean }) => {
  const { title, authors, description, imageUrl, id } = card;
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };
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
          <Dialog.Description className={clsx(open ? styles.descriptionOpen : styles.description)} dangerouslySetInnerHTML={{ __html: description }} />
          <Button type="button" onClick={handleClick} className={styles.chevronButton}>
            {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </Button>
          <FavoriteButtonContainer bookId={id} favorite={favoriteStatus} />
        </div>
        <Dialog.Close>
          <Button type="button" className={styles.closeButton}>
            <Cross1Icon />
          </Button>
        </Dialog.Close>
      </div>
    </Dialog.Content>
  );
};
