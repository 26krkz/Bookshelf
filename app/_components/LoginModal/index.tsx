import * as RadixAlertDialog from "@radix-ui/react-alert-dialog";
import styles from "./styles.module.css";
import { VisuallyHidden } from "@radix-ui/themes";
import LoginButton from "../LoginButton";
import Button from "../Button";

type Props = { isOpen: boolean; closeModal: () => void };

export default function LoginModal({ isOpen, closeModal }: Props) {
  return (
    <RadixAlertDialog.Root open={isOpen}>
      <RadixAlertDialog.Overlay className={styles.AlertDialogOverlay} />
      <div className={styles.AlertDialogContent}>
        <VisuallyHidden>
          <RadixAlertDialog.Title>タイトル</RadixAlertDialog.Title>
        </VisuallyHidden>
        <RadixAlertDialog.Description className={styles.description}>ログインが必要な機能です。</RadixAlertDialog.Description>
        <div className={styles.buttonArea}>
          <Button type="button" onClick={() => closeModal()} className={styles.cancelButton}>
            Cancel
          </Button>
          <RadixAlertDialog.Action asChild>
            <LoginButton />
          </RadixAlertDialog.Action>
        </div>
      </div>
    </RadixAlertDialog.Root>
  );
}
