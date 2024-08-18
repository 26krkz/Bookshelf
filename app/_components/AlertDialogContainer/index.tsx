import { ReactElement, ReactNode } from "react";
import { AlertDialog } from "@radix-ui/themes";
import styles from "./styles.module.css";

export function AlertDialogContainer({ content, children }: { content: (fn?: () => void) => ReactElement; children: ReactNode }) {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>{children}</AlertDialog.Trigger>
      {content()}
    </AlertDialog.Root>
  );
}
