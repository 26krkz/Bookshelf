"use client";
import { ReactElement, ReactNode } from "react";
import { Modal as MuiModal } from "@mui/material/";
import { useModal } from "@/app/_hooks/useModal";

export function ModalContainer({ content, children }: { content: (fn?: () => void) => ReactElement; children: ReactNode }) {
  const { open, handleOpenModal, handleCloseModal } = useModal();
  return (
    <div>
      <button onClick={handleOpenModal}>{children}</button>
      <MuiModal open={open} onClose={handleCloseModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        {content()}
      </MuiModal>
    </div>
  );
}
