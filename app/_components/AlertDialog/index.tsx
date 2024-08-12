import * as RadixAlertDialog from "@radix-ui/react-alert-dialog";
import styles from "./styles.module.css";

type Props = { title: string; description: string; actionButtonText: string };

export default function AlertDialog({ title, description, actionButtonText }: Props) {
  return (
    <RadixAlertDialog.Portal>
      <RadixAlertDialog.Overlay className={styles.AlertDialogOverlay} />
      <RadixAlertDialog.Content className={styles.AlertDialogContent}>
        <RadixAlertDialog.Title>{title}</RadixAlertDialog.Title>
        <RadixAlertDialog.Description>{description}</RadixAlertDialog.Description>
        <div>
          <RadixAlertDialog.Cancel asChild>
            <button>Cancel</button>
          </RadixAlertDialog.Cancel>
          <RadixAlertDialog.Action asChild>
            <button>{actionButtonText}</button>
          </RadixAlertDialog.Action>
        </div>
      </RadixAlertDialog.Content>
    </RadixAlertDialog.Portal>
  );
}
