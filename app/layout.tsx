import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
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
  title: "Erika Villa — Computer Science Engineer & Full Stack Developer",
  description:
    "Portfolio of Erika Cristina Villa Quishpi — Computer Science Engineer, Software Development Analyst at ETIKOS.",
  keywords: [
    "Erika Villa",
    "Software Development Analyst",
    "Full Stack Developer",
    "Computer Science Engineer",
    "Cybersecurity",
    "DevSecOps",
    "Next.js",
    "TypeScript",
    "Ecuador",
  ],
  authors: [{ name: "Erika Cristina Villa Quishpi" }],
  openGraph: {
    title: "Erika Villa — CS Engineer & Full Stack Developer",
    description: "Cyber-Soft portfolio showcasing VOLKI, InvisiClaim, and Sybil.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
