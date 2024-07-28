import Button from "../Button";
import Input from "../Input";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import styles from "./styles.module.css";

export default function Search() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={styles.searchContainer}>
          <Input label="タイトルで検索"></Input>
          <Button className={styles.searchButton}>検索</Button>
        </div>
      </ThemeProvider>
    </>
  );
}
