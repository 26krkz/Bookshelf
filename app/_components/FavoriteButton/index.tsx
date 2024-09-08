import Button from "../Button";
import { useFormStatus } from "react-dom";
import Image from "next/image";
import styles from "./styles.module.css";

type Props = { formAction: (payload: FormData) => void; status: boolean; bookId: string };

const Submit = ({ status }: { status: boolean }) => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className={styles.favoriteButton}>
      {pending ? <Image src="/loading.gif" alt="" width={30} height={30} /> : status ? "お気に入り済み" : "お気に入りに追加"}
    </Button>
  );
};
export default function FavoriteButton(props: Props) {
  const { formAction, status, bookId } = props;
  return (
    <form action={formAction}>
      <input type="hidden" name="bookId" value={bookId} />
      <Submit status={status} />
    </form>
  );
}
