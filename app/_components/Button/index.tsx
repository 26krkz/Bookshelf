import { Button as MuiButton } from "@mui/material";

export default function Button({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <MuiButton variant="contained" className={className}>
      {children}
    </MuiButton>
  );
}
