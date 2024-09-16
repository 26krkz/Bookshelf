"use client";
import Heading from "@/_components/Heading";
import styles from "./styles.module.css";
import CheckboxWithLabel from "@/_components/CheckboxWithLabel";
import Button from "@/_components/Button";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [status, setStatus] = useState(false);
  const handleClick = () => {
    setStatus((prev) => !prev);
  };
  return (
    <>
      <Heading as="h2" className={styles.heading}>
        ShelfShareから退会する
      </Heading>
      <div className={styles.description}>
        <p className={styles.descriptionMain}>
          ShelfShareから退会する場合、以下の項目を確認した上で<span className={styles.descriptionBold}>退会する</span>ボタンを押してください。
        </p>
        <ul className={styles.descriptionList}>
          <li className={styles.descriptionListItem}>
            一度ShlefShareから退会すると、アカウントは削除され、登録した本棚・お気に入りリストは<span className={styles.descriptionBold}>すべて削除されます</span>。
          </li>
          <li className={styles.descriptionListItem}>
            退会後に同じgoogleアカウントで登録できますが、<span className={styles.descriptionBold}>退会前のアカウントの内容は戻りません</span>。
          </li>
        </ul>
      </div>
      <div className={styles.checkbox}>
        <CheckboxWithLabel size="3" label="上記の内容を確認しました。" status={status} handleClick={handleClick} />
      </div>
      <div className={styles.buttonArea}>
        <Link className={styles.cancelButton} href="/">
          キャンセル
        </Link>
        <form action="">
          <Button className={styles.withdrawalButton} type="submit" disabled={!status}>
            退会する
          </Button>
        </form>
      </div>
    </>
  );
}
