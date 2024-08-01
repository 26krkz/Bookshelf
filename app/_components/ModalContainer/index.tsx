"use client";
import { ReactElement, ReactNode } from "react";
import { Dialog } from "@radix-ui/themes";
import styles from "./styles.module.css";

export function ModalContainer({ content, children }: { content: (fn?: () => void) => ReactElement; children: ReactNode }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <button className={styles.button}>{children}</button>
      </Dialog.Trigger>
      {content()}
    </Dialog.Root>
  );
}
