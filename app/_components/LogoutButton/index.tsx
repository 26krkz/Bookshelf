"use client";
import Button from "../Button";
import { signOut } from "next-auth/react";
import styles from "./styles.module.css";

export default function LogoutButton() {
  return (
    <Button type="button" onClick={() => signOut({ callbackUrl: "/" })} className={styles.logoutButton}>
      ログアウト
    </Button>
  );
}
