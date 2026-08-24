import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/app/lib/utils";

const roboto = Roboto({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Todo Add more metadata
export const metadata: Metadata = {
  title: "Rahul Roy",
  description: "Portfolio of Rahul Roy, a Software Engineer, web developer and a problem solver.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", roboto.variable)} scrollbar-none`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
