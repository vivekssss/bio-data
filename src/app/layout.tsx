import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { LanguageProviderClient } from "@/components/LanguageProviderClient";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Free Biodata Templates | Youth Biodata Hub",
  description:
    "Download and copy 25+ free biodata templates for jobs, weddings, and more. 100% free, no login, made for students and freshers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProviderClient>
          <div className="min-h-screen bg-slate-950 text-slate-50">
            <Navbar />
            <main className="mx-auto max-w-6xl px-4 pb-12 pt-6 sm:px-6 sm:pt-8">
              {children}
            </main>
          </div>
        </LanguageProviderClient>
      </body>
    </html>
  );
}
