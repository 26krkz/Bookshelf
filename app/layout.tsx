import type { Metadata } from "next";
import "./globals.css";
import "./reset.css";
import "@radix-ui/themes/styles.css";
import Header from "./_components/Header";
import { Theme } from "@radix-ui/themes";
import { Fragment } from "react";
import styles from "./styles.module.css";

export const metadata: Metadata = {
  title: "Bookshelf",
  description: "Bookshelf App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <Header />
          <div className={styles.contentsWrapper}>{children}</div>
        </Theme>
      </body>
    </html>
  );
}
