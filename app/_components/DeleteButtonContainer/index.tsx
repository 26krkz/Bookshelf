"use client";
import DeleteButton from "../DeleteButton";
import useModal from "@/_hooks/useModal";
import AlertDialogModalComponent from "./AlertDialogModalComponent";
import deleteFavorite from "@/_services/deleteFavorite";
import deleteFromBookshelf from "@/_services/deleteFromBookshelf";

type Props = {
  bookId: string;
  bookListType: string;
};

export default function DeleteButtonContainer({ bookId, bookListType }: Props) {
  // router.refreshでstateをリセットしているからcloseModalは使っていない。
  const { openModal, closeModal, isOpen } = useModal(false);
  const formAction = bookListType === "お気に入りリスト" ? deleteFavorite : deleteFromBookshelf;

  return (
    <>
      <DeleteButton bookId={bookId} formAction={formAction(openModal)} />
      {isOpen && <AlertDialogModalComponent isOpen={isOpen} />}
    </>
  );
}
