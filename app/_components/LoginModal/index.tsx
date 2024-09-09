import * as RadixAlertDialog from "@radix-ui/react-alert-dialog";
import styles from "./styles.module.css";
import { VisuallyHidden } from "@radix-ui/themes";

type Props = { isOpen: boolean; closeModal: () => void };

export default function LoginModal({ isOpen, closeModal }: Props) {
  return (
    <RadixAlertDialog.Root open={isOpen}>
      <RadixAlertDialog.Portal>
        <RadixAlertDialog.Overlay className={styles.AlertDialogOverlay} />
        <RadixAlertDialog.Content className={styles.AlertDialogContent}>
          <VisuallyHidden>
            <RadixAlertDialog.Title>タイトル</RadixAlertDialog.Title>
          </VisuallyHidden>
          <RadixAlertDialog.Description>ログインが必要な機能です ログインしますか？</RadixAlertDialog.Description>
          <div>
            <RadixAlertDialog.Action asChild>
              <button onClick={() => closeModal()}>Cancel</button>
            </RadixAlertDialog.Action>
            <RadixAlertDialog.Action asChild>
              <button>ログインする</button>
            </RadixAlertDialog.Action>
          </div>
        </RadixAlertDialog.Content>
      </RadixAlertDialog.Portal>
    </RadixAlertDialog.Root>
  );
}
