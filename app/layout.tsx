import Providers from "@/app/providers";
import { cn } from "@/lib/utils";
import { BookHeart } from "lucide-react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Disney.db",
  description: "Find all about all your favorite Disney characters!",
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
        <Providers>
          <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
            <nav className="container gap-6 text-lg font-medium flex flex-row items-center md:gap-5 md:text-sm lg:gap-6">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-semibold md:text-base"
              >
                <BookHeart className="h-6 w-6" />
                <span>Disney.db</span>
              </Link>
            </nav>
          </header>
          {children}
        </Providers>
      </body>
    </html>
  );
}
