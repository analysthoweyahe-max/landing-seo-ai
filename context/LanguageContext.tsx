"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  defaultLanguage,
  isLanguage,
  languageDirections,
  type Language,
  resources,
  type TranslationKey,
} from "@/i18n";

const STORAGE_KEY = "site-lang";

type LanguageContextValue = {
  language: Language;
  direction: "rtl" | "ltr";
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readStoredLanguage() {
  if (typeof window === "undefined") return defaultLanguage;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return isLanguage(stored) ? stored : defaultLanguage;
}

function readResource(language: Language, key: TranslationKey) {
  return key.split(".").reduce<unknown>((value, segment) => {
    if (value && typeof value === "object" && segment in value) {
      return (value as Record<string, unknown>)[segment];
    }
    return undefined;
  }, resources[language]) as string | undefined;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => readStoredLanguage());

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((current) => {
      const nextLanguage = current === "ar" ? "en" : "ar";
      window.localStorage.setItem(STORAGE_KEY, nextLanguage);
      return nextLanguage;
    });
  }, []);

  const direction = languageDirections[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
    document.body.dir = direction;
  }, [direction, language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      direction,
      setLanguage,
      toggleLanguage,
      t: (key) => readResource(language, key) ?? key,
    }),
    [direction, language, setLanguage, toggleLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}

export function useTranslation() {
  const { t } = useLanguage();
  return { t };
}
