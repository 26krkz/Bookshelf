import Button from "../Button";
import Input from "../Input";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

export default function Search() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Input label="タイトルで検索"></Input>
        <Button>検索</Button>
      </ThemeProvider>
    </>
  );
}
