import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppProviders from "@/src/providers/app-providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Clean Architecture Boilerplate",
    template: "%s | Clean Architecture",
  },
  description:
    "A scalable Clean Architecture boilerplate for Next.js frontend projects, designed for maintainability, modularity, and separation of concerns.",
  keywords: [
    "Next.js",
    "Clean Architecture",
    "Frontend Boilerplate",
    "Feature-Based Architecture",
    "Atomic Design",
    "TypeScript",
    "Scalable Frontend",
  ],
  authors: [{ name: "Nada Abdelfattah" }],
  creator: "Nada Abdelfattah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
