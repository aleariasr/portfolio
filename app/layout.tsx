import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { THEME_INIT_SCRIPT } from "@/lib/theme";
import { site } from "@/content/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_DESCRIPTION =
  "Software developer building production-grade business systems — offline ERPs, POS platforms and SaaS applications with real deployments, not classroom exercises.";

export const metadata: Metadata = {
  metadataBase: new URL("https://aleariasr.com"),

  title: {
    default: "Alejandro Arias Rojas | Software Developer",
    template: "%s | Alejandro Arias Rojas",
  },

  description: SITE_DESCRIPTION,

  keywords: [
    "Alejandro Arias Rojas",
    "Alejandro Arias",
    "Software Developer",
    "Freelance Developer",
    "Business Informatics",
    "Django",
    "React",
    "Java",
    "Spring Boot",
    "Backend Developer",
    "ERP Systems",
    "POS Systems",
    "Cloud Technologies",
    "Enterprise Applications",
    "Costa Rica",
  ],

  authors: [{ name: "Alejandro Arias Rojas" }],
  creator: "Alejandro Arias Rojas",

  openGraph: {
    title: "Alejandro Arias Rojas | Software Developer",
    description: SITE_DESCRIPTION,
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
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },

  alternates: {
    canonical: "https://aleariasr.com",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.domain,
  email: `mailto:${site.email.primary}`,
  sameAs: [site.social.github, site.social.linkedin],
  address: {
    "@type": "PostalAddress",
    addressCountry: "CR",
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
      suppressHydrationWarning
    >
      <head>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
