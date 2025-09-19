import type { Metadata } from "next";
import { Josefin_Sans, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Appshell from "@/components/layouts/Appshell";

const fontNunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

const fontJosefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TANDHUR",
  description: "Agriculture & Forestry Monitoring Application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${fontJosefinSans.variable} ${fontNunitoSans.variable} antialiased`}
      >
        <Appshell>{children}</Appshell>
      </body>
    </html>
  );
}