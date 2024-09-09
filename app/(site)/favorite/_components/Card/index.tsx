import type { BookInfo } from "@/types";
import { AlertDialogContainer } from "@/_components/AlertDialogContainer";
import AlertDialog from "@/_components/AlertDialog";
import styles from "./styles.module.css";
import BookCard from "@/_components/BookCard";
import { Cross1Icon } from "@radix-ui/react-icons";
import { BookViewModal } from "../BookViewModal";
import { ModalContainer } from "@/_components/ModalContainer";

export default function Card({ card }: { card: BookInfo }) {
  return (
    <li className={styles.cardContainer}>
      <ModalContainer content={() => <BookViewModal card={card} />}>
        <BookCard card={card} cardSize="small" />
      </ModalContainer>
      <span className={styles.title}>{card.title}</span>
      <AlertDialogContainer content={() => <AlertDialog bookListType="お気に入りリスト" description={`${card.title}を削除してもよろしいですか？`} id={card.id} />}>
        <button className={styles.deleteButton}>
          <Cross1Icon className={styles.clossIcon} />
        </button>
      </AlertDialogContainer>
    </li>
  );
}
