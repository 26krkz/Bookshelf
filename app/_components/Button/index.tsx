import { Button as RadixButton } from "@radix-ui/themes";

export default function Button({ children, className }: { children: React.ReactNode; className?: string }) {
  return <RadixButton className={className}>{children}</RadixButton>;
}
