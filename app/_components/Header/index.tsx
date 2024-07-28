import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import { PersonIcon } from "@radix-ui/react-icons";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerComponent}>
        <Link className={styles.headerLink} href="/">
          <span className={styles.logoText}>Bookshelf</span>
        </Link>
        <div className={styles.headerComponentRight}>
          <span className={styles.icon}>
            <PersonIcon className={styles.dummyIcon} />
          </span>
          <span className={styles.userName}>User Name</span>
        </div>
      </div>
    </header>
  );
}
