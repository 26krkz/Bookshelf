import type { Metadata } from "next";
import "./globals.css";
import "./reset.css";
import "@radix-ui/themes/styles.css";
import Header from "./_components/Header";
import { Theme } from "@radix-ui/themes";

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
          {children}
        </Theme>
      </body>
    </html>
  );
}
