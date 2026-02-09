import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Li Yuanhao · Portfolio",
  description: "Minimal personal portfolio with Eastern aesthetics and product-focused storytelling."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
