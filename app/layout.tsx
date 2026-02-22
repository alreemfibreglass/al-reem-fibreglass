// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Al Reem Fibre Glass & Gen. Cont. Co. LLC",
  description:
    "Trusted shading and construction solutions in the UAE since 1994. Specialists in car parking shades, PVC & HDPE structures, GRP lining, and general contracting based in Al Ain.",
  keywords: [
    "car parking shades UAE",
    "fibre glass Al Ain",
    "PVC shades UAE",
    "shading solutions Abu Dhabi",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
