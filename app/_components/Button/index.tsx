import { Button as RadixButton } from "@radix-ui/themes";

type Props = { type: "button" | "submit" | "reset" | undefined; children: React.ReactNode; className?: string };

export default function Button({ type, children, className }: Props) {
  return (
    <RadixButton type={type} className={className}>
      {children}
    </RadixButton>
  );
}
