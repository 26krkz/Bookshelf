import { Card } from "@/app/types";
import styles from "./styles.module.css";
import Image from "next/image";
import { Dialog } from "@radix-ui/themes";

export const BookViewmodal = ({ card }: { card: Card }) => {
  const { title, author, description } = card;
  return (
    <Dialog.Content>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image src="/dummy-image.jpeg" alt="本の画像" fill className={styles.image} />
        </div>
        <div className={styles.modalTextArea}>
          <Dialog.Title>{title}</Dialog.Title>
          <p className={styles.author}>{author}</p>
          <Dialog.Description className={styles.description}>{description}</Dialog.Description>
          <Dialog.Close>
            <button>閉じる</button>
          </Dialog.Close>
        </div>
      </div>
    </Dialog.Content>
  );
};
