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
  title: "Tinku Countdown 420",
  description: "A bold red countdown timer website for a single important date.",
  applicationName: "Tinku-Countdown420",
  metadataBase: new URL("https://tinku-countdown420.vercel.app"),
  openGraph: {
    title: "Tinku Countdown 420",
    description: "A bold red countdown timer website for a single important date.",
    url: "https://tinku-countdown420.vercel.app",
    siteName: "Tinku Countdown 420",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tinku Countdown 420",
    description: "A bold red countdown timer website for a single important date.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
