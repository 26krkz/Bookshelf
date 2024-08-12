import type { BookInfo } from "@/types";
import { AlertDialogContainer } from "../AlertDialogContainer";
import AlertDialog from "../AlertDialog";
import styles from "./styles.module.css";
import BookCard from "../BookCard";
import { ModalContainer } from "../ModalContainer";
import { BookViewModal } from "../BookViewModal";
import { Cross1Icon } from "@radix-ui/react-icons";

export default function Card({ card, listTitle }: { card: BookInfo; listTitle: string }) {
  return (
    <li className={styles.cardContainer}>
      <ModalContainer content={() => <BookViewModal card={card} />}>
        <BookCard card={card} cardSize="small" />
      </ModalContainer>
      <span className={styles.title}>{card.title}</span>
      <AlertDialogContainer content={() => <AlertDialog title={`${listTitle}からの削除`} description={`${card.title}を削除してもよろしいですか？`} actionButtonText="削除する" />}>
        <button className={styles.deleteButton}>
          <Cross1Icon className={styles.clossIcon} />
        </button>
      </AlertDialogContainer>
    </li>
  );
}
