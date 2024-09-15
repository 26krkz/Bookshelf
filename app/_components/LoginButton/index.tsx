"use client";
import Button from "../Button";
import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <Button type="button" onClick={() => signIn()}>
      会員登録・ログイン
    </Button>
  );
}
