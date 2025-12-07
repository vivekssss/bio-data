'use client';

import type { ReactNode } from "react";
import { LanguageProvider } from "@/context/LanguageContext";

export function LanguageProviderClient({
  children,
}: {
  children: ReactNode;
}) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
