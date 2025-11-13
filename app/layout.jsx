import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import MainMenu from "@/components/main-menu";
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

export const metadata = {
  title: "GOLEM",
  description: "Humanoids Built for Real Manufacturing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <header className="p-4 sticky top-0 border-b bg-zinc-50 z-30">
            <div className="mx-auto flex md:max-w-5xl items-center justify-between gap-6">
              <Link href="/" className="text-xl font-bold">
                GOLEM
              </Link>
              <MainMenu />
            </div>
          </header>
          <main>{children}</main>
          <footer className="mt-auto border-t bg-zinc-50">
            <div className="p-4 mx-auto md:max-w-5xl flex flex-col md:flex-row justify-between gap-4">
              <div className="flex gap-4">
                {/* TODO add social media links and build TOS/legal pages */}
                <Link
                  href="/privacy-policy"
                  className="text-xs text-zinc-800 underline"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="text-xs text-zinc-800 underline"
                >
                  Terms of Service
                </Link>
              </div>
              <p className="uppercase text-xs text-zinc-800">
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
