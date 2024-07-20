import { useState } from "react";
import type { Card, ModalInfo } from "@/app/types";

export const useModal = () => {
  const [open, setOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState<ModalInfo | null>(null);
  const handleOpenModal = (card: Card): void => {
    setModalInfo(card);
    setOpen(true);
  };
  const handleCloseModal = () => setOpen(false);
  return { open, handleOpenModal, handleCloseModal, modalInfo };
};
