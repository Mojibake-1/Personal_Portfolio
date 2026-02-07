import type { Metadata } from "next";
import { Caveat, IBM_Plex_Mono, Noto_Serif_SC } from "next/font/google";
import "./globals.css";

const serif = Noto_Serif_SC({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "700"]
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"]
});

const signature = Caveat({
  subsets: ["latin"],
  variable: "--font-signature",
  weight: ["500", "700"]
});

export const metadata: Metadata = {
  title: "Li Yuanhao · Portfolio",
  description: "Minimal personal portfolio with Eastern aesthetics and product-focused storytelling."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className={`${serif.variable} ${mono.variable} ${signature.variable}`}>{children}</body>
    </html>
  );
}
