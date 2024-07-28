import { TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function Input({ placeholder, className }: { placeholder: string; className?: string }) {
  return (
    <TextField.Root placeholder={placeholder} className={className}>
      <TextField.Slot>
        <MagnifyingGlassIcon height="16" width="16" />
      </TextField.Slot>
    </TextField.Root>
  );
}
