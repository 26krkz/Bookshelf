import { TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function Input({ name, placeholder, className }: { name: string; placeholder: string; className?: string }) {
  return (
    <TextField.Root name={name} placeholder={placeholder} className={className}>
      <TextField.Slot>
        <MagnifyingGlassIcon height="16" width="16" />
      </TextField.Slot>
    </TextField.Root>
  );
}
