import { Card } from "@/types";
import styles from "./styles.module.css";
import Image from "next/image";
import { Dialog } from "@radix-ui/themes";
import Button from "@/_components/Button";
import { AlertDialogContainer } from "@/_components/AlertDialogContainer";
import AlertDialog from "@/_components/AlertDialog";

export const FavoriteBookViewModal = ({ card }: { card: Card }) => {
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
          {/* <AlertDialogContainer content={() => <AlertDialog description="お気に入りから削除してもよろしいですか？" actionButtonText="削除する" />}>
            <Button>お気に入りから削除する</Button>
          </AlertDialogContainer> */}
          <Dialog.Close>
            <button>閉じる</button>
          </Dialog.Close>
        </div>
      </div>
    </Dialog.Content>
  );
};
