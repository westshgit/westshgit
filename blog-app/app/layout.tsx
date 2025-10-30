import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";
import Footer from "@/app/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "West Sheriff",
  description: "West Sheriff | Software Engineer & Founder",
};

export default function ({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-2xl m-auto font-sans font-normal text-gray-900 dark:text-gray-100`}
      >
        <main className="min-h-screen p-6 pt-3 md:pt-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
