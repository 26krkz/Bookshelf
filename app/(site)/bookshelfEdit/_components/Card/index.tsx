import type { BookInfo } from "@/types";
import { AlertDialogContainer } from "@/_components/AlertDialogContainer";
import AlertDialog from "@/_components/AlertDialog";
import styles from "./styles.module.css";
import BookCard from "@/_components/BookCard";
import { ModalContainer } from "@/_components/ModalContainer";
import { Cross1Icon } from "@radix-ui/react-icons";
import { BookViewModal } from "../BookViewModal";

export default function Card({ card }: { card: BookInfo }) {
  return (
    <li className={styles.cardContainer}>
      <ModalContainer content={() => <BookViewModal card={card} />}>
        <BookCard card={card} cardSize="small" />
      </ModalContainer>
      <span className={styles.title}>{card.title}</span>
      <AlertDialogContainer content={() => <AlertDialog title="本棚からの削除" description={`${card.title}を削除してもよろしいですか？`} actionButtonText="削除する" id={card.id} />}>
        <button className={styles.deleteButton}>
          <Cross1Icon className={styles.clossIcon} />
        </button>
      </AlertDialogContainer>
    </li>
  );
}
