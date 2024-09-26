import Button from "../Button";
import { useFormStatus } from "react-dom";
import Image from "next/image";
import styles from "./styles.module.css";

type Props = { formAction: (payload: FormData) => void; status: boolean; bookId: string };

const Submit = ({ status }: { status: boolean }) => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className={styles.addBookshelfButton}>
      {pending ? <Image src="/loading.gif" alt="" width={18} height={18} /> : status ? "本棚に追加済み" : "本棚に追加"}
    </Button>
  );
};
export default function AddBookshelfButton(props: Props) {
  const { formAction, status, bookId } = props;
  return (
    <form action={formAction}>
      <input type="hidden" name="bookId" value={bookId} />
      <Submit status={status} />
    </form>
  );
}
