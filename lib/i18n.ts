import en from "./i18n/en.json";
import fr from "./i18n/fr.json";
import de from "./i18n/de.json";
import es from "./i18n/es.json";
import pt from "./i18n/pt.json";
import ja from "./i18n/ja.json";
import ko from "./i18n/ko.json";
import it from "./i18n/it.json";
import nl from "./i18n/nl.json";
import { type Locale, locales, localeNames } from "./i18n/config";

// Legacy support
export type Language = {
  code: string
  name: string
  nativeName: string
  flag: string
}

export const languages: Language[] = locales.map(code => ({
  code,
  name: localeNames[code].name,
  nativeName: localeNames[code].nativeName,
  flag: localeNames[code].flag,
}));

export type TranslationKey = keyof typeof en

const translations = {
  en,
  fr,
  de,
  es,
  pt,
  ja,
  ko,
  it,
  nl,
};

export function getTranslation(locale: string, key: TranslationKey): string {
  const langTranslations = (translations as Record<string, any>)[locale] as Record<TranslationKey, string> | undefined;
  return langTranslations?.[key] || (translations as Record<string, any>)["en"][key] || key
}