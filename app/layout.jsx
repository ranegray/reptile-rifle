import { Geist, Geist_Mono, Space_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import MainMenu from "@/components/main-menu";
import SocialLinks from "@/components/social-links";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "GOLEM",
  description: "Humanoids engineered for industrial deployment with intelligent and predictable behavior.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceMono.variable} antialiased bg-zinc-50 overflow-x-hidden`}
      >
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-30 w-full border-b border-zinc-200">
            <div className="absolute inset-0 -z-10 bg-white/80 backdrop-blur-md" />
            <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/golem-bw-logo.png"
                  alt="GOLEM Logo"
                  width={40}
                  height={40}
                  className="w-auto object-contain"
                  priority
                />
                <span className="font-mono text-2xl">
                  GOLEM
                </span>
              </Link>
              <MainMenu />
            </div>
          </header>
          <main>{children}</main>
          <footer className="mt-auto border-t bg-zinc-50">
            <div className="p-4 mx-auto md:max-w-5xl flex flex-col md:flex-row justify-between gap-4 items-center">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <SocialLinks />
                <div className="hidden md:block h-4 w-px bg-zinc-300" />
                <Link
                  href="/privacy-policy"
                  className="text-xs text-zinc-600 hover:text-zinc-900 underline"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="text-xs text-zinc-600 hover:text-zinc-900 underline"
                >
                  Terms of Service
                </Link>
              </div>
              <p className="uppercase text-xs text-zinc-500 font-mono">
                &copy; 2025 GOLEM. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
