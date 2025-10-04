export const defaultLocale = 'en' as const
export const locales = ['en', 'es', 'de', 'fr', 'pt', 'ja', 'ko', 'it', 'nl'] as const

export type Locale = typeof locales[number]

export const localeNames: Record<Locale, { name: string; nativeName: string; flag: string }> = {
  en: { name: 'English', nativeName: 'English', flag: '🇺🇸' },
  es: { name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  de: { name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  fr: { name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  pt: { name: 'Portuguese', nativeName: 'Português', flag: '🇵🇹' },
  ja: { name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  ko: { name: 'Korean', nativeName: '한국어', flag: '🇰🇷' },
  it: { name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
  nl: { name: 'Dutch', nativeName: 'Nederlands', flag: '🇳🇱' },
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

export function getLocaleFromPath(pathname: string): { locale: Locale; pathWithoutLocale: string } {
  const segments = pathname.split('/').filter(Boolean)
  const maybeLocale = segments[0]
  
  if (maybeLocale && isValidLocale(maybeLocale)) {
    return {
      locale: maybeLocale,
      pathWithoutLocale: '/' + segments.slice(1).join('/')
    }
  }
  
  return {
    locale: defaultLocale,
    pathWithoutLocale: pathname
  }
}

export function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === defaultLocale) {
    return path
  }
  
  // Remove leading slash and add locale prefix
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `/${locale}${cleanPath ? `/${cleanPath}` : ''}`
}

export function removeLocaleFromPath(path: string): string {
  const { pathWithoutLocale } = getLocaleFromPath(path)
  return pathWithoutLocale || '/'
}