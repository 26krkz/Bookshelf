import { Card } from "@/app/types";
import styles from "./styles.module.css";
import Image from "next/image";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const BookViewmodal = ({ card }: { card: Card }) => {
  const { title, author, description } = card;
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image src="/dummy-image.jpeg" alt="本の画像" fill className={styles.image} />
      </div>
      <div className={styles.modalTextArea}>
        <p className={styles.title}>{title}</p>
        <p className={styles.author}>{author}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
