import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "mindcusp",
  description:
    "We are a small team of developers who are passionate about crafting scalable software. We help startups build their web based MVPs that can be easily maintained.",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />

      <body className={inter.className}>{children}</body>
    </html>
  );
}
