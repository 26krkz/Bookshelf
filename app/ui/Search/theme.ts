"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          width: 300,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          padding: "12px 14px",
        },
      },
    },
  },
});

export default theme;
