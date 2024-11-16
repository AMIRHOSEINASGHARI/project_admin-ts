// css
import "./globals.css";
// next
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// lib
import { cn } from "@/lib/utils";
// provider
import ReactQueryClientProvider from "@/providers/ReactQueryClientProvider";
import ThemeProvider from "@/providers/ThemeProvider";
// cmp
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | OnlineShop",
    default: "Dashboard | OnlineShop",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body
        className={cn("min-h-screen bg-background antialiased dark:bg-dark1")}
      >
        <ReactQueryClientProvider>
          <ThemeProvider>
            <div>{children}</div>
            <Toaster
              toastOptions={{
                className: "dark:bg-dark3 dark:text-light2",
              }}
            />
          </ThemeProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
