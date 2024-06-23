import { Button as MuiButton } from "@mui/material";

export default function Button({ children }: { children: React.ReactNode }) {
  return <MuiButton variant="contained">{children}</MuiButton>;
}
