import arCommon from "@/locales/ar/common.json";
import enCommon from "@/locales/en/common.json";

export const languages = ["ar", "en"] as const;

export type Language = (typeof languages)[number];
export type TranslationKey =
  | "navbar.about"
  | "navbar.usecases"
  | "navbar.stats"
  | "navbar.pricing"
  | "navbar.testimonials"
  | "navbar.faq"
  | "navbar.cta"
  | "navbar.languageToggle"
  | "navbar.menu"
  | "hero.watch";

export const defaultLanguage: Language = "ar";

export const languageDirections: Record<Language, "rtl" | "ltr"> = {
  ar: "rtl",
  en: "ltr",
};

export const resources = {
  ar: arCommon,
  en: enCommon,
} as const;

export function isLanguage(value: string | null): value is Language {
  return value === "ar" || value === "en";
}
