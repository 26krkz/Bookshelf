import Button from "../Button";
import Input from "../Input";
import styles from "./styles.module.css";

export default function Search() {
  return (
    <>
      <div className={styles.searchContainer}>
        <Input label="タイトルで検索"></Input>
        <Button className={styles.searchButton}>検索</Button>
      </div>
    </>
  );
}
