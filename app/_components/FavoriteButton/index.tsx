import { useState } from "react";
import Button from "../Button";

type Props = { onClick: () => void; status: boolean };

export default function FavoriteButton(props: Props) {
  const [status, setStatus] = useState(props.status);
  return (
    <Button onClick={props.onClick} type="button">
      {status ? "お気に入り済み" : "お気に入りに追加する"}
    </Button>
  );
}
