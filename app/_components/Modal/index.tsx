"use client";
import Typography from "@mui/material/Typography";
import { Modal as MuiModal } from "@mui/material/";
import Box from "@mui/material/Box";
import type { Card } from "@/app/types";
import { useModal } from "@/app/_hooks/useModal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Modal({ card, children }: { card: Card; children: React.ReactNode }) {
  const { title, author, description } = card;
  const { open, handleOpenModal, handleCloseModal } = useModal();
  return (
    <div>
      <button onClick={handleOpenModal}>{children}</button>
      <MuiModal open={open} onClose={handleCloseModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {author}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {description}
          </Typography>
        </Box>
      </MuiModal>
    </div>
  );
}
