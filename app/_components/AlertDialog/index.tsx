import * as RadixAlertDialog from "@radix-ui/react-alert-dialog";
import styles from "./styles.module.css";
import DeleteButtonContainer from "../DeleteButtonContainer";

type Props = { bookListType: string; description: string; id: string };

export default function AlertDialog({ bookListType, description, id }: Props) {
  return (
    <RadixAlertDialog.Portal>
      <RadixAlertDialog.Overlay className={styles.AlertDialogOverlay} />
      <RadixAlertDialog.Content className={styles.AlertDialogContent}>
        <RadixAlertDialog.Title>{`${bookListType}からの削除`}</RadixAlertDialog.Title>
        <RadixAlertDialog.Description>{description}</RadixAlertDialog.Description>
        <div>
          <RadixAlertDialog.Cancel asChild>
            <button>Cancel</button>
          </RadixAlertDialog.Cancel>
          <RadixAlertDialog.Action asChild>
            <DeleteButtonContainer bookId={id} bookListType={bookListType} />
          </RadixAlertDialog.Action>
        </div>
      </RadixAlertDialog.Content>
    </RadixAlertDialog.Portal>
  );
}
