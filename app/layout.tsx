import { Providers } from "@/app/providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "mindcusp",
  description:
    "We are a team of developers who are passionate about crafting scalable web applications. We strive to help early stage startups in building and scaling their MVPs. Our team partners with you right from the start to ensure a fast time-to-market for your business idea.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
