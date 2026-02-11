import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import type { Language, Translations } from "./types";
import { en } from "./en";
import { pl } from "./pl";

const translations: Record<Language, Translations> = { en, pl };

function getInitialLanguage(): Language {
  const stored = localStorage.getItem("lang");
  if (stored === "en" || stored === "pl") return stored;

  const browser = navigator.language.slice(0, 2);
  return browser === "pl" ? "pl" : "en";
}

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLang] = useState<Language>(getInitialLanguage);

  const setLanguage = useCallback((lang: Language) => {
    setLang(lang);
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, []);

  // Set lang attribute on initial render
  document.documentElement.lang = language;

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useT(): Translations {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useT must be used within LanguageProvider");
  return ctx.t;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return { language: ctx.language, setLanguage: ctx.setLanguage };
}
