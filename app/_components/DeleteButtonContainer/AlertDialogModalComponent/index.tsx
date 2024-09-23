"use client";
import * as RadixAlertDialog from "@radix-ui/react-alert-dialog";
import styles from "./styles.module.css";
import { VisuallyHidden } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = { isOpen: boolean };

export default function AlertDialogModalComponent({ isOpen }: Props) {
  const [pending, setPending] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const timerId = setTimeout(() => {
      setPending(true);
      router.refresh();
    }, 1000);
    return () => clearTimeout(timerId);
  }, [isOpen]);

  return (
    <RadixAlertDialog.Root open={isOpen}>
      <RadixAlertDialog.Portal>
        <RadixAlertDialog.Overlay className={styles.AlertDialogOverlay} />
        <RadixAlertDialog.Content className={styles.AlertDialogContent}>
          <VisuallyHidden>
            <RadixAlertDialog.Title>タイトル</RadixAlertDialog.Title>
          </VisuallyHidden>
          <RadixAlertDialog.Description className={styles.description}>
            {pending ? <Image className={styles.loadingIcon} src="/loading.gif" alt="" width={30} height={30} /> : "削除しました。"}
          </RadixAlertDialog.Description>
        </RadixAlertDialog.Content>
      </RadixAlertDialog.Portal>
    </RadixAlertDialog.Root>
  );
}
