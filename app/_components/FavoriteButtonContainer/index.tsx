"use client";

import { useState } from "react";
import FavoriteButton from "../FavoriteButton";
import useModal from "@/_hooks/useModal";
import AlertDialogModalComponent from "./AlertDialogModalComponent";

type Props = {
  id: string;
  favorite: boolean;
};

export default function FavoriteButtonContainer({ id = "003", favorite = false }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { openModal, closeModal, isOpen } = useModal(false);
  const handleClickFavorite = async () => {
    if (isSubmitting) return;
    try {
      const res = await fetch("", {
        method: "POST",
      });
      if (res.ok) {
        console.log("success");
        openModal();
      } else {
        openModal();
      }
    } catch (err) {
      openModal();
    }
    setIsSubmitting(false);
  };

  return (
    <>
      <FavoriteButton status={favorite} onClick={handleClickFavorite} />
      {isOpen && <AlertDialogModalComponent closeModal={closeModal} isOpen={isOpen} />}
    </>
  );
}
