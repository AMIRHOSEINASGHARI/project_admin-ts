// css
import "./globals.css";
// next
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
// lib
import { cn } from "@/lib/utils";
// provider
import DarkModeProvider from "@/providers/DarkModeProvider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Onlineshop Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <DarkModeProvider>{children}</DarkModeProvider>
      </body>
    </html>
  );
}
