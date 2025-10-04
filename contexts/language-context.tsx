"use client"

import { createContext, useContext, useState, useEffect, useCallback } from "react"
import { usePathname, useRouter } from "next/navigation"
import { getTranslation, type TranslationKey } from "@/lib/i18n"
import { type Locale, defaultLocale, isValidLocale, getLocaleFromPath, getLocalizedPath, removeLocaleFromPath } from "@/lib/i18n/config"

type LanguageContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: TranslationKey) => string
  // Legacy support
  language: string
  setLanguage: (language: string) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  
  // Get locale from current path
  const { locale: currentLocale } = getLocaleFromPath(pathname)
  const [locale, setLocaleState] = useState<Locale>(currentLocale)

  // Update locale when path changes
  useEffect(() => {
    const { locale: pathLocale } = getLocaleFromPath(pathname)
    if (pathLocale !== locale) {
      setLocaleState(pathLocale)
    }
  }, [pathname, locale])

  const changeLocale = useCallback((newLocale: Locale) => {
    if (newLocale === locale) return
    
    // Get current path without locale
    const pathWithoutLocale = removeLocaleFromPath(pathname)
    
    // Create new localized path
    const newPath = getLocalizedPath(pathWithoutLocale, newLocale)
    
    // Navigate to new path
    router.push(newPath)
    
    // Update state
    setLocaleState(newLocale)
    
    // Store preference
    localStorage.setItem("preferredLocale", newLocale)
  }, [locale, pathname, router])

  const t = useCallback(
    (key: TranslationKey) => {
      return getTranslation(locale, key)
    },
    [locale],
  )

  // Legacy support
  const changeLanguage = useCallback((language: string) => {
    if (isValidLocale(language)) {
      changeLocale(language)
    }
  }, [changeLocale])

  return (
    <LanguageContext.Provider value={{ 
      locale, 
      setLocale: changeLocale, 
      t,
      // Legacy support
      language: locale,
      setLanguage: changeLanguage
    }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}