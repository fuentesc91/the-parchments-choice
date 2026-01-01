import type { Metadata } from "next";
import { EB_Garamond, Almendra_Display, Cinzel } from "next/font/google";
import "./globals.css";

const garamond = EB_Garamond({
  variable: "--font-general",
  subsets: ["latin"],
});

const almendraDisplay = Almendra_Display({
  weight: "400",
  variable: "--font-headings",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-buttons",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Parchment's Choice",
  description: "Find out where you belong",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${garamond.variable} ${almendraDisplay.variable} ${cinzel.variable}`}
    >
      <body className={"flex min-h-screen antialiased"}>{children}</body>
    </html>
  );
}
