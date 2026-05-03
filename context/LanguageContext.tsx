"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { translations, type Lang, type Translations } from "@/config/translations";

/* ─── Context shape ────────────────────────────────────────────── */
interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

/* ─── Context ──────────────────────────────────────────────────── */
const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

/* ─── Provider ──────────────────────────────────────────────────── */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en"); // SSR-safe default

  // Detect browser language or restore from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("portfolio-lang") as Lang | null;
    if (stored === "en" || stored === "es") {
      setLangState(stored);
    } else {
      // Auto-detect from browser
      const browserLang = navigator.language.toLowerCase();
      setLangState(browserLang.startsWith("es") ? "es" : "en");
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("portfolio-lang", l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

/* ─── Hook ──────────────────────────────────────────────────────── */
export function useLanguage(): LanguageContextValue {
  return useContext(LanguageContext);
}
