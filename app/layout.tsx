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
  title: "Alejandro Arias Rojas | Software Developer",
  description:
    "Business Informatics student focused on backend systems, enterprise applications and cloud technologies.",
  openGraph: {
    title: "Alejandro Arias Rojas | Software Developer",
    description:
      "Portfolio of Alejandro Arias Rojas, focused on backend systems, enterprise applications and cloud technologies.",
    url: "https://aleariasr.com",
    siteName: "Alejandro Arias Rojas",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alejandro Arias Rojas Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
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
