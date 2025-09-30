import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["300" ,"400", "500"],
});

export const metadata: Metadata = {
  title: "Lean.x - Next Generation, Unified Payment Platform",
  description: "Leanx",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rubik.variable}`} >
      <body>
        {children}
      </body>
    </html>
  );
}