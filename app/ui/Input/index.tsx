import { TextField } from "@mui/material";

export default function Input({ label }: { label: string }) {
  return <TextField id="outlined-basic" label={label} variant="outlined"></TextField>;
}
