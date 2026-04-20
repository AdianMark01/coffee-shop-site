import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Brew Haven Coffee Shop | Best Coffee in Manila",
  description:
    "Brew Haven is a cozy coffee shop in Manila offering premium coffee, fresh pastries, and free Wi-Fi. Visit us today!",
  keywords: [
    "coffee shop Manila",
    "best coffee Manila",
    "coffee shop Philippines",
    "study cafe Manila",
    "coffee near me"
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        {/* NAVBAR (GLOBAL) */}
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="font-bold text-xl">Brew Haven ☕</h1>
              <div className="space-x-6 font-semibold">
                <Link href="/" className="hover:text-gray-500">Home</Link>
                <a href="#services" className="hover:text-gray-500">Services</a>
                <a href="#about" className="hover:text-gray-500">About</a>
                <Link href="/blog" className="hover:text-gray-500">Blog</Link>
                <a href="#contact" className="hover:text-gray-500">Contact</a>
              </div>
          </div>
        </nav>

        {/* PAGE CONTENT */}
        <div className="pt-24">
          {children}
        </div>

      </body>
    </html>
  );
}
