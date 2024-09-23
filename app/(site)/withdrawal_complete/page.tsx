import Heading from "@/_components/Heading";
import styles from "./styles.module.css";
import Link from "next/link";
import Button from "@/_components/Button";

export default function Page() {
  return (
    <>
      <Heading as="h2" className={styles.heading}>
        ShelfShareからの退会が完了しました。
      </Heading>
      <div className={styles.description}>
        ShelfShareをご利用いただきありがとうございました。
        <br />
        また次のご利用をお待ちしております。
      </div>
      <div className={styles.buttonArea}>
        <Button type="button" className={styles.backToTopButton}>
          <Link className={styles.backToTopLink} href="/">
            Topに戻る
          </Link>
        </Button>
      </div>
    </>
  );
}
