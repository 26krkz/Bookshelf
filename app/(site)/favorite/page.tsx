"use client";
import Heading from "@/_components/Heading";
import { cardItems } from "@/constants";
import styles from "./styles.module.css";
import { ModalContainer } from "@/_components/ModalContainer";
import FavoriteCard from "./_components/FavoriteCard";
import { FavoriteBookViewModal } from "./_components/FavoriteBookViewModal";
import { AlertDialogContainer } from "@/_components/AlertDialogContainer";
import AlertDialog from "@/_components/AlertDialog";

export default function Page() {
  return (
    <>
      <Heading as="h2">お気に入りリスト</Heading>
      <ul className={styles.list}>
        {cardItems.map((card) => {
          return (
            <li key={card.cardId}>
              <ModalContainer content={() => <FavoriteBookViewModal card={card} />}>
                <FavoriteCard card={card} />
              </ModalContainer>
            </li>
          );
        })}
        {/* モーダルは出るようになったからモーダルの中で呼べるようにする
        ドキュメントに例が書いてあったかも。確認
         */}
        <AlertDialogContainer content={() => <AlertDialog description="お気に入りから削除してもよろしいですか？" actionButtonText="削除する" />}>
          <button>お気に入りから削除する</button>
        </AlertDialogContainer>
      </ul>
    </>
  );
}
