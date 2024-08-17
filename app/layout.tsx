// css
import "./globals.css";
// next
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// lib
import { cn } from "@/lib/utils";
// provider
import DarkModeProvider from "@/providers/DarkModeProvider";
import ReactQueryClientProvider from "@/providers/ReactQueryClientProvider";
// cmp
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
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
    <html lang="en" className={inter.className}>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased dark:bg-dark1"
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
