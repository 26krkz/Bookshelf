import { useCallback, useState } from "react";

export const useModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpenModal = useCallback(() => {
    setOpen((prev) => !prev);
    console.log(open);
  }, [open]);
  return { open, handleOpenModal };
};
