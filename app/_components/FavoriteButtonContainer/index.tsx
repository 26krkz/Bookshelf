"use client";

import FavoriteButton from "../FavoriteButton";
import useModal from "@/_hooks/useModal";
import { useFormState } from "react-dom";
import postFavorite from "@/_services/postFavorite";
import LoginModal from "../LoginModal";
import { useSession } from "next-auth/react";

type Props = {
  bookId: string;
  favorite: boolean;
};

export default function FavoriteButtonContainer({ bookId, favorite = false }: Props) {
  const { openModal, closeModal, isOpen } = useModal(false);
  const { data } = useSession();
  const [status, formAction] = useFormState(postFavorite({ openModal, data }), favorite);

  return (
    <>
      <FavoriteButton bookId={bookId} status={status} formAction={formAction} />
      {isOpen && <LoginModal closeModal={closeModal} isOpen={isOpen} />}
    </>
  );
}
