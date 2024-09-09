import * as RadixAlertDialog from "@radix-ui/react-alert-dialog";
import styles from "./styles.module.css";
import DeleteButtonContainer from "../DeleteButtonContainer";

type Props = { title: string; description: string; actionButtonText: string; id: string };

export default function AlertDialog({ title, description, actionButtonText, id }: Props) {
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
            <DeleteButtonContainer bookId={id} />
          </RadixAlertDialog.Action>
        </div>
      </RadixAlertDialog.Content>
    </RadixAlertDialog.Portal>
  );
}
