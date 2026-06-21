import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://riyo.me"),
  title: {
    default: "Riyo — Personal Website",
    template: "%s — Riyo",
  },
  description:
    "Riyoの個人ウェブサイト。つくったもの、実験、文章、便利なスクリプトへの入口です。",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Riyo — Personal Website",
    description: "つくる、試す、そして公開する。Riyoのウェブ上の拠点。",
    url: "https://riyo.me",
    siteName: "Riyo",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/riyo-icon.png",
        width: 1254,
        height: 1254,
        alt: "Riyoのイラストアイコン",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Riyo — Personal Website",
    description: "つくる、試す、そして公開する。Riyoのウェブ上の拠点。",
    images: ["/riyo-icon.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f1e8",
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
