import { readFile } from 'fs/promises'
import { join } from 'path'
import { type Locale } from './config'

const translationsCache = new Map<Locale, Record<string, string>>()

async function loadTranslations(locale: Locale): Promise<Record<string, string>> {
  // Check cache first
  if (translationsCache.has(locale)) {
    return translationsCache.get(locale)!
  }

  try {
    const filePath = join(process.cwd(), 'lib', 'i18n', `${locale}.json`)
    const fileContent = await readFile(filePath, 'utf-8')
    const translations = JSON.parse(fileContent) as Record<string, string>

    // Cache the result
    translationsCache.set(locale, translations)
    return translations
  } catch (error) {
    console.error(`Failed to load translations for locale ${locale}:`, error)
    // Fallback to English
    if (locale !== 'en') {
      return loadTranslations('en')
    }
    return {}
  }
}

export async function getTranslation(key: string, locale: Locale): Promise<string> {
  const translations = await loadTranslations(locale)
  return translations[key] || key
}

export async function getTranslations(locale: Locale): Promise<Record<string, string>> {
  return loadTranslations(locale)
}