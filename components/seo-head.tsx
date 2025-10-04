"use client"

import Head from "next/head"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"
import { locales, getLocalizedPath, removeLocaleFromPath } from "@/lib/i18n/config"

interface SEOHeadProps {
  title?: string
  description?: string
  canonical?: string
  noindex?: boolean
}

export function SEOHead({ title, description, canonical, noindex = false }: SEOHeadProps) {
  const { locale, t } = useLanguage()
  const pathname = usePathname()
  
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://afunning.com"
  const pathWithoutLocale = removeLocaleFromPath(pathname)
  
  const pageTitle = title || t("seo.siteName")
  const pageDescription = description || t("seo.description.short")
  const canonicalUrl = canonical || `${siteUrl}${getLocalizedPath(pathWithoutLocale, locale)}`

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Language alternates */}
      {locales.map((lang) => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={lang}
          href={`${siteUrl}${getLocalizedPath(pathWithoutLocale, lang)}`}
        />
      ))}
      
      {/* Default language alternate */}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${siteUrl}${pathWithoutLocale}`}
      />
      
      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={locale} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Language */}
      <html lang={locale} />
    </Head>
  )
}