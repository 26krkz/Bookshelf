import styles from "./styles.module.css";
import DeleteButtonContainer from "../DeleteButtonContainer";
import Button from "../Button";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";

type Props = { bookListType: string; description: string; id: string; openModal: () => void; closeModal: () => void; isOpen: boolean };

export default function AlertDialog({ bookListType, description, id, openModal, closeModal, isOpen }: Props) {
  return (
    <Dialog.Root open={isOpen}>
      <button className={styles.deleteButton} onClick={() => openModal()}>
        <Cross1Icon className={styles.clossIcon} />
      </button>
      <div className={styles.AlertDialogContainer}>
        <Dialog.Overlay className={styles.AlertDialogOverlay} />
        <Dialog.Content>
          <div className={styles.AlertDialogContainer}>
            <div className={styles.AlertDialogContent}>
              <Dialog.Title className={styles.title}>{`${bookListType}からの削除`}</Dialog.Title>
              <Dialog.Description className={styles.description}>{description}</Dialog.Description>
              <div className={styles.dialogButtonArea}>
                <Button type="button" onClick={() => closeModal()} className={styles.cancelButton}>
                  Cancel
                </Button>
                <Dialog.Close asChild>
                  <DeleteButtonContainer bookId={id} bookListType={bookListType} />
                </Dialog.Close>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </div>
    </Dialog.Root>
  );
}
