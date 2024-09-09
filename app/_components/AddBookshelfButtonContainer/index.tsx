"use client";
import useModal from "@/_hooks/useModal";
import { useFormState } from "react-dom";
import LoginModal from "../LoginModal";
import AddBookshelfButton from "../AddBookshelfButton";
import postAddBookshelf from "@/_services/postAddBookshelf";

type Props = {
  bookId: string;
  addBookshelf: boolean;
};

export default function AddBookshelfButtonContainer({ bookId, addBookshelf = false }: Props) {
  const { openModal, closeModal, isOpen } = useModal(false);
  const [status, formAction] = useFormState(postAddBookshelf(openModal), addBookshelf);

  return (
    <>
      <AddBookshelfButton bookId={bookId} status={status} formAction={formAction} />
      {isOpen && <LoginModal closeModal={closeModal} isOpen={isOpen} />}
    </>
  );
}
