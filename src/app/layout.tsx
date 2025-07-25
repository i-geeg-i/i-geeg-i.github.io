import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./style.css";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <meta name="author" content="Egor Glebov" />
      <title>Egor Glebov</title>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9880272668182862" crossOrigin="anonymous"></script>
    </head>
      <body className={inter.className}>
        {/* <Header /> */}
        {children}
        <Footer year={"2025"} />
      </body>
    </html>
  );
}
