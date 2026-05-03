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
  title: "Erika Villa — Computer Science Engineer & Full Stack Developer",
  description:
    "Portfolio of Erika Cristina Villa Quishpi — Computer Science Engineer, Full Stack Developer at InitGrammers S.A.S., transitioning to DevSecOps & Digital Forensics.",
  keywords: [
    "Erika Villa",
    "Full Stack Developer",
    "Computer Science Engineer",
    "DevSecOps",
    "Digital Forensics",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
