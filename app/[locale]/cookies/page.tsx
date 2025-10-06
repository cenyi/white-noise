import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isValidLocale, type Locale, locales } from '@/lib/i18n/config'
import { getTranslation } from '@/lib/i18n'
import { generateCanonicalUrl, generateAlternateUrls } from '@/lib/canonical-url'
import CookiesPageComponent from '@/components/pages/cookies-page'

interface LocaleCookiesPageProps {
  params: { locale: string }
}

export async function generateMetadata({ params }: LocaleCookiesPageProps): Promise<Metadata> {
  if (!isValidLocale(params.locale)) {
    return {}
  }

  const locale = params.locale as Locale
  const title = getTranslation(locale, 'pages.cookies.title')
  const description = getTranslation(locale, 'pages.cookies.description')
  const siteName = getTranslation(locale, 'seo.siteName')
  
  const canonicalUrl = generateCanonicalUrl('/cookies', locale)
  const alternateUrls = generateAlternateUrls('/cookies', locales)
  
  return {
    title: `${title} - ${siteName}`,
    description,
    robots: { index: true, follow: true },
    alternates: {
      canonical: canonicalUrl,
      languages: alternateUrls,
    },
  }
}

export default function LocaleCookiesPage({ params }: LocaleCookiesPageProps) {
  if (!isValidLocale(params.locale)) {
    notFound()
  }
  return <CookiesPageComponent />
}

export function generateStaticParams() {
  return [
    { locale: 'en' }, { locale: 'en-AU' }, { locale: 'en-IE' }, { locale: 'en-NZ' },
    { locale: 'es' }, { locale: 'de' }, { locale: 'fr' }, { locale: 'pt' },
    { locale: 'ja' }, { locale: 'ko' }, { locale: 'it' }, { locale: 'nl' },
    { locale: 'nb-NO' }, { locale: 'hr-HR' },
  ]
}