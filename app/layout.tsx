import type { Metadata } from "next";
import "./globals.css";
import "./reset.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Header from "./ui/Header";

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
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <body>
            <Header />
            {children}
          </body>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
