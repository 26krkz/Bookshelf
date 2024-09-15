import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import { getServerSession } from "@/lib/auth";
import prisma from "../../../prisma";
import LoginButton from "../LoginButton";
import DropdownMenu from "../DropdownMenu";

export default async function Header() {
  const session = await getServerSession();
  const profile = await prisma.user.findFirst({
    where: { email: session?.user.email },
  });
  return (
    <header className={styles.header}>
      <div className={styles.headerComponent}>
        <Link className={styles.headerLink} href="/">
          <span className={styles.logoText}>Bookshelf</span>
        </Link>
        {!!session ? <DropdownMenu profile={profile} /> : <LoginButton />}
      </div>
    </header>
  );
}
