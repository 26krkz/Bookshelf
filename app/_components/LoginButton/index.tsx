"use client";
import Button from "../Button";
import { signIn } from "next-auth/react";
import styles from "./styles.module.css";

export default function LoginButton() {
  return (
    <Button type="button" onClick={() => signIn()} className={styles.loginButton}>
      会員登録 / ログイン
    </Button>
  );
}
