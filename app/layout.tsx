// css
import "./globals.css";
// next
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
// lib
import { cn } from "@/lib/utils";
// provider
import DarkModeProvider from "@/providers/DarkModeProvider";
import ReactQueryClientProvider from "@/providers/ReactQueryClientProvider";
// cmp
import { Toaster } from "react-hot-toast";

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
          "min-h-screen bg-background font-sans antialiased dark:bg-dark1",
          fontSans.variable
        )}
      >
        <ReactQueryClientProvider>
          <DarkModeProvider>
            <div>{children}</div>
            <Toaster
              toastOptions={{
                className: "dark:bg-dark3 dark:text-light2",
              }}
            />
          </DarkModeProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
