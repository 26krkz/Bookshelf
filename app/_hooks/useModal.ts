import { useState } from "react";

export default function useModal(defaultOpen: boolean = false) {
  const [state, setState] = useState<{ isOpen: boolean }>({ isOpen: defaultOpen });
  const closeModal = () => {
    setState({ isOpen: false });
  };
  const openModal = () => {
    setState({ isOpen: true });
  };

  return { openModal, closeModal, isOpen: state.isOpen };
}
