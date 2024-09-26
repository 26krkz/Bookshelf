import styles from "./styles.module.css";
import clsx from "clsx";

type Props = { type: "button" | "submit" | "reset" | undefined; children: React.ReactNode; className?: string; onClick?: () => void; disabled?: boolean };

export default function Button(props: Props) {
  return <button {...props} className={clsx(styles.baseButton, props.className)} />;
}
