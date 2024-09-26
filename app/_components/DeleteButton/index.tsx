import Button from "../Button";
import { useFormStatus } from "react-dom";
import Image from "next/image";
import styles from "./styles.module.css";

type Props = { formAction: (payload: FormData) => void; bookId: string };

const Submit = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className={styles.deleteButton}>
      {pending ? <Image src="/loading.gif" alt="" width={15} height={15} className={styles.loading} /> : "削除する"}
    </Button>
  );
};
export default function DeleteButton(props: Props) {
  const { formAction, bookId } = props;
  return (
    <form action={formAction}>
      <input type="hidden" name="bookId" value={bookId} />
      <Submit />
    </form>
  );
}
