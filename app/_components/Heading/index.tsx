import { Heading as RadixHeading } from "@radix-ui/themes";
import styles from "./styles.module.css";

type Props = {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | undefined;
  size?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
  children: React.ReactNode;
  className: string;
};

export default function Heading({ as, size, children, className }: Props) {
  return (
    <div className={styles.headingContainer}>
      <RadixHeading as={as} size={size} className={className}>
        {children}
      </RadixHeading>
    </div>
  );
}
