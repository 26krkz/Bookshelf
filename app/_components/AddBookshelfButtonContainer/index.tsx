"use client";
import useModal from "@/_hooks/useModal";
import { useFormState } from "react-dom";
import LoginModal from "../LoginModal";
import AddBookshelfButton from "../AddBookshelfButton";
import postAddBookshelf from "@/_services/postAddBookshelf";
import { useSession } from "next-auth/react";

type Props = {
  bookId: string;
  addBookshelf: boolean;
};

export default function AddBookshelfButtonContainer({ bookId, addBookshelf = false }: Props) {
  const { openModal, closeModal, isOpen } = useModal(false);
  const { data } = useSession();
  const [status, formAction] = useFormState(postAddBookshelf({ openModal, data }), addBookshelf);

  return (
    <>
      <AddBookshelfButton bookId={bookId} status={status} formAction={formAction} />
      {isOpen && <LoginModal closeModal={closeModal} isOpen={isOpen} />}
    </>
  );
}
