import { type Locale } from '@/lib/i18n/config'

/**
 * Generates a canonical URL without trailing slash
 * @param path - The path (with or without locale)
 * @param locale - The current locale
 * @returns Canonical URL without trailing slash
 */
export function generateCanonicalUrl(path: string, locale: Locale): string {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  
  // Remove trailing slash if present (except for root)
  let cleanPath = path === '/' ? path : path.replace(/\/$/, '')
  
  // Ensure path starts with locale
  if (!cleanPath.startsWith(`/${locale}`)) {
    cleanPath = `/${locale}${cleanPath === '/' ? '' : cleanPath}`
  }
  
  return `${baseUrl}${cleanPath}`
}

/**
 * Generates alternate language URLs for hreflang tags
 * @param path - The path without locale
 * @param locales - Array of supported locales
 * @returns Object with locale keys and canonical URLs
 */
export function generateAlternateUrls(path: string, locales: readonly Locale[]): Record<string, string> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  const cleanPath = path === '/' ? '' : path.replace(/\/$/, '')
  
  return locales.reduce((acc, locale) => {
    acc[locale] = `${baseUrl}/${locale}${cleanPath}`
    return acc
  }, {} as Record<string, string>)
}