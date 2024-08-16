"use client";
import Button from "../Button";
import Input from "../Input";
import styles from "./styles.module.css";

export default function Search({ formAction }: { formAction: (payload: FormData) => void }) {
  return (
    <div className={styles.searchContainer}>
      <form action={formAction}>
        <Input placeholder="タイトルで検索" className={styles.input} name="inputValue"></Input>
        <Button type="submit" className={styles.searchButton}>
          検索
        </Button>
      </form>
    </div>
  );
}
