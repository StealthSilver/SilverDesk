import type { Metadata } from "next";
import "./globals.css";
import { Snippet, Parisienne, Palanquin } from "next/font/google";
import siteData from "../data";

const snippet = Snippet({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-snippet",
});

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-parisienne",
});

const palanquin = Palanquin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-palanquin",
});

export const metadata: Metadata = {
  title: "Silver's Desk",
  description:
    "A creative space for poems, stories, and reflections on philosophy — where thoughts meet emotions, and words search for meaning.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${snippet.variable} ${parisienne.variable} ${palanquin.variable}`}
    >
      <body className="bg-[#ecede8]  antialiased">{children}</body>
    </html>
  );
}
