"use client";

import { useEffect } from "react";

interface GoogleTranslate {
  translate?: {
    TranslateElement: {
      new (
        options: {
          pageLanguage: string;
          includedLanguages?: string;
          layout?: unknown;
        },
        elementId: string,
      ): void;
      InlineLayout: {
        SIMPLE: unknown;
      };
    };
  };
}

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: GoogleTranslate;
    setGoogleTranslateLanguage?: (lang: string) => void;
  }
}

export function GoogleTranslateWidget() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.setGoogleTranslateLanguage = (lang: string) => {
      const value = `/en/${lang || "en"}`;
      const domain = window.location.hostname;
      document.cookie = `googtrans=${value};path=/;`;
      if (domain && domain !== "localhost") {
        document.cookie = `googtrans=${value};domain=${domain};path=/;`;
      }
      // reload so Google Translate script can apply the cookie
      window.location.reload();
    };
    const scriptId = "google-translate-script";
    if (document.getElementById(scriptId)) return;

    window.googleTranslateElementInit = () => {
      if (!window.google?.translate) return;
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi,gu,mr,ta,te,bn,ml,pa,ur",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element",
      );
    };

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Gadget is fully hidden – we control language via the custom toggle instead.
  return <div id="google_translate_element" className="hidden" />;
}
