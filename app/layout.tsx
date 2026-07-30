import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yarncue | 編み物の記録・毛糸管理アプリ",
  description: "Yarncueは、パターン、毛糸、進捗、ひらめきをひとつにまとめる編み物の記録・毛糸管理アプリです。かぎ針編み・棒針編みに対応。",
  openGraph: {
    title: "Yarncue | 編み物の記録・毛糸管理アプリ",
    description: "編みたい気持ちを、次の一目へ。",
    images: ["/og.png"],
  },
  twitter: { card: "summary_large_image", title: "Yarncue | 編み物の記録・毛糸管理アプリ", description: "編みたい気持ちを、次の一目へ。", images: ["/og.png"] },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
