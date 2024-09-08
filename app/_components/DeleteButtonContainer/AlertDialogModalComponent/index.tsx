import * as RadixAlertDialog from "@radix-ui/react-alert-dialog";
import styles from "./styles.module.css";
import { VisuallyHidden } from "@radix-ui/themes";
import Button from "@/_components/Button";

type Props = { isOpen: boolean; closeModal: () => void };

export default function AlertDialogModalComponent({ isOpen, closeModal }: Props) {
  return (
    <RadixAlertDialog.Root open={isOpen}>
      <RadixAlertDialog.Portal>
        <RadixAlertDialog.Overlay className={styles.AlertDialogOverlay} />
        <RadixAlertDialog.Content className={styles.AlertDialogContent}>
          <VisuallyHidden>
            <RadixAlertDialog.Title>タイトル</RadixAlertDialog.Title>
          </VisuallyHidden>
          <RadixAlertDialog.Description>削除しました。</RadixAlertDialog.Description>
          <div>
            <RadixAlertDialog.Action asChild>
              <Button
                type="button"
                onClick={() => {
                  closeModal();
                  window.location.reload();
                }}
              >
                閉じる
              </Button>
            </RadixAlertDialog.Action>
          </div>
        </RadixAlertDialog.Content>
      </RadixAlertDialog.Portal>
    </RadixAlertDialog.Root>
  );
}
