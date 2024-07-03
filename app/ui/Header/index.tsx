import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import PersonIcon from "@mui/icons-material/Person";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerComponent}>
        <Link className={styles.headerLink} href="/">
          <h1>Bookshelf</h1>
        </Link>
        <div>
          <span className={styles.icon}>
            <PersonIcon />
          </span>
          <span className={styles.userName}>User Name</span>
        </div>
      </div>
    </header>
  );
}
