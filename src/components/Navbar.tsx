"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { GoogleTranslateWidget } from "@/components/GoogleTranslateWidget";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/templates", label: "All templates" },
];

const languageOptions = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी" },
  { code: "mr", label: "मराठी" },
  { code: "gu", label: "ગુજરાતી" },
  { code: "ta", label: "தமிழ்" },
  { code: "te", label: "తెలుగు" },
  { code: "bn", label: "বাংলা" },
  { code: "pa", label: "ਪੰਜਾਬੀ" },
  { code: "ml", label: "മലയാളം" },
  { code: "ur", label: "اردو" },
];

export function Navbar() {
  const { language, setLanguage } = useLanguage();
  const [isClient, setIsClient] = useState(false);
  const [selectedLangCode, setSelectedLangCode] = useState<string>("en");

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const match = document.cookie.match(/googtrans=([^;]+)/);
      if (match && match[1]) {
        const parts = match[1].split("/");
        const code = parts[2] || "en";
        setSelectedLangCode(code);
        setLanguage(code === "hi" ? "hi" : "en");
      }
    } catch {
      // ignore cookie parse errors
    }
  }, [setLanguage]);

  function handleLanguageChange(code: string) {
    setSelectedLangCode(code || "en");
    setLanguage(code === "hi" ? "hi" : "en");
    if (
      typeof window !== "undefined" &&
      (window as any).setGoogleTranslateLanguage
    ) {
      (window as any).setGoogleTranslateLanguage(code || "en");
    }
  }

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/80 backdrop-blur print:hidden">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-sm sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="rounded-md bg-gradient-to-r from-sky-500 to-violet-500 px-2 py-1 text-xs font-semibold text-white">
            Free
          </span>
          <span className="text-sm font-semibold tracking-tight sm:text-base">
            {language === "hi" ? "यूथ बायोडाटा हब" : "Youth Biodata Hub"}
          </span>
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-2 text-[11px] sm:text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-200/80 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          {isClient && <GoogleTranslateWidget />}
          {isClient && (
            <select
              value={selectedLangCode}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className="max-w-[46vw] rounded-full border border-slate-700/70 bg-slate-900/80 px-2.5 py-1 text-[10px] font-medium text-slate-200 outline-none transition hover:border-slate-400/80 hover:text-white"
            >
              {languageOptions.map((opt) => (
                <option key={opt.code} value={opt.code}>
                  {opt.label}
                </option>
              ))}
            </select>
          )}
        </nav>
      </div>
    </header>
  );
}
