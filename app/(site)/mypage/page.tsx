import Link from "next/link";
import styles from "./styles.module.css";
import Heading from "@/_components/Heading";
import { notFound } from "next/navigation";
import prisma from "../../../prisma";
import { getServerSession } from "@/lib/auth";

export default async function Page() {
  const session = await getServerSession();
  if (!session || !session.user) {
    notFound();
  }
  const profile = await prisma.user.upsert({
    where: { email: session.user.email },
    update: {},
    create: {
      name: session.user.name,
      email: session.user.email,
    },
  });

  const link = [
    { text: "ユーザーの設定を変更する", href: "#" },
    { text: "本棚の編集", href: "/bookshelfEdit" },
    { text: "本棚を閲覧する", href: `/bookshelf/${profile.name}` },
    { text: "お気に入りリスト", href: "/favorite" },
    { text: "退会する", href: "/withdrawal" },
  ];

  return (
    <>
      <Heading as="h2" className={styles.heading}>
        マイページ
      </Heading>
      <ul className={styles.list}>
        {link.map((li, index) => {
          return (
            <li key={index} className={styles.listItem}>
              <Link className={styles.link} href={li.href}>
                {li.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
