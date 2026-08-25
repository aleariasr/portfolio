import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://aleariasr.com"),

  title: "Alejandro Arias Rojas | Software Developer",

  description:
    "Software developer building production-grade business systems — offline ERPs, POS platforms and SaaS applications with real deployments, not classroom exercises.",

  openGraph: {
    title: "Alejandro Arias Rojas | Software Developer",
    description:
      "Software developer building production-grade business systems — offline ERPs, POS platforms and SaaS applications with real deployments, not classroom exercises.",
    images: ["/og-image.png"],
  },

  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
