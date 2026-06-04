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

  title: {
    default: "Alejandro Arias Rojas | Software Developer",
    template: "%s | Alejandro Arias Rojas",
  },

  description:
    "Portfolio of Alejandro Arias Rojas, Business Informatics student and software developer focused on Django, React, Java, backend systems, enterprise applications and cloud technologies.",

  keywords: [
    "Alejandro Arias Rojas",
    "Alejandro Arias",
    "Software Developer",
    "Business Informatics",
    "Django",
    "React",
    "Java",
    "Spring Boot",
    "Backend Developer",
    "Cloud Technologies",
    "Enterprise Applications",
    "Costa Rica",
  ],

  authors: [{ name: "Alejandro Arias Rojas" }],
  creator: "Alejandro Arias Rojas",

  openGraph: {
    title: "Alejandro Arias Rojas | Software Developer",
    description:
      "Portfolio of Alejandro Arias Rojas, software developer focused on Django, React, Java, backend systems, enterprise applications and cloud technologies.",
    url: "https://aleariasr.com",
    siteName: "Alejandro Arias Rojas Portfolio",
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

  twitter: {
    card: "summary_large_image",
    title: "Alejandro Arias Rojas | Software Developer",
    description:
      "Portfolio of Alejandro Arias Rojas, focused on backend systems, enterprise applications and cloud technologies.",
    images: ["/og-image.png"],
  },

  alternates: {
    canonical: "https://aleariasr.com",
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
