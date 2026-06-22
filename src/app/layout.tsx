import type { Metadata, Viewport } from "next";
import AnimatedDocumentTitle from "@/components/AnimatedDocumentTitle";
import PortalPerspective from "@/components/PortalPerspective";
import ScrollReveal from "@/components/ScrollReveal";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://riyo.me"),
  title: {
    default: "riyo.me — Riyo",
    template: "%s — Riyo",
  },
  description: "Riyoの個人サイト。作ったものを置いています。",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "riyo.me — Riyo",
    description: "Riyoの個人サイト。作ったものを置いています。",
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
    title: "riyo.me — Riyo",
    description: "Riyoの個人サイト。作ったものを置いています。",
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
      <body>
        <AnimatedDocumentTitle />
        <PortalPerspective />
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
