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

export const metadata: Metadata = {
  title: "Muhammad Afzaal — MERN Stack Developer & Frontend Specialist",
  description:
    "Frontend-focused MERN developer building fast, accessible, and maintainable web apps with React, Next.js, TypeScript and Node.js.",
  icons: {
    icon: "/images/Muhammad Afzaal.jpg",
    shortcut: "/images/Muhammad Afzaal.jpg",
    apple: "/images/Muhammad Afzaal.jpg",
  },
  openGraph: {
    title: "Muhammad Afzaal — MERN Stack Developer & Frontend Specialist",
    description:
      "Frontend-focused MERN developer building fast, accessible, and maintainable web apps with React, Next.js, TypeScript and Node.js.",
    url: "https://your-domain.com/",
    siteName: "Muhammad Afzaal Portfolio",
    images: [
      {
        url: "/images/Muhammad Afzaal.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Afzaal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Afzaal — MERN Stack Developer & Frontend Specialist",
    description:
      "Frontend-focused MERN developer building fast, accessible, and maintainable web apps with React, Next.js, TypeScript and Node.js.",
    images: ["/images/Muhammad Afzaal.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
