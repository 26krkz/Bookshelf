"use client";

import DeleteButton from "../DeleteButton";
import useModal from "@/_hooks/useModal";
import AlertDialogModalComponent from "./AlertDialogModalComponent";
import deleteFavorite from "@/_services/deleteFavorite";

type Props = {
  bookId: string;
};

export default function DeleteButtonContainer({ bookId }: Props) {
  const { openModal, closeModal, isOpen } = useModal(false);

  return (
    <>
      <DeleteButton bookId={bookId} formAction={deleteFavorite(openModal)} />
      {isOpen && <AlertDialogModalComponent closeModal={closeModal} isOpen={isOpen} />}
    </>
  );
}
