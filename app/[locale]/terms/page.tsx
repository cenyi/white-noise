import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isValidLocale, type Locale, locales } from '@/lib/i18n/config'
import { getTranslation } from '@/lib/i18n'
import { generateCanonicalUrl, generateAlternateUrls } from '@/lib/canonical-url'
import TermsPageComponent from '@/components/pages/terms-page'

interface LocaleTermsPageProps {
  params: { locale: string }
}

export async function generateMetadata({ params }: LocaleTermsPageProps): Promise<Metadata> {
  if (!isValidLocale(params.locale)) {
    return {}
  }

  const locale = params.locale as Locale
  const title = getTranslation(locale, 'pages.terms.title')
  const description = getTranslation(locale, 'pages.terms.description')
  const siteName = getTranslation(locale, 'seo.siteName')
  
  const canonicalUrl = generateCanonicalUrl('/terms', locale)
  const alternateUrls = generateAlternateUrls('/terms', locales)
  
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

export default function LocaleTermsPage({ params }: LocaleTermsPageProps) {
  if (!isValidLocale(params.locale)) {
    notFound()
  }
  return <TermsPageComponent />
}

export function generateStaticParams() {
  return [
    { locale: 'en' }, { locale: 'en-AU' }, { locale: 'en-IE' }, { locale: 'en-NZ' },
    { locale: 'es' }, { locale: 'de' }, { locale: 'fr' }, { locale: 'pt' },
    { locale: 'ja' }, { locale: 'ko' }, { locale: 'it' }, { locale: 'nl' },
    { locale: 'nb-NO' }, { locale: 'hr-HR' },
  ]
}