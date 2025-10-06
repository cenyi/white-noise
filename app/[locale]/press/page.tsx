import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isValidLocale, type Locale, locales } from '@/lib/i18n/config'
import { getTranslation } from '@/lib/i18n'
import { generateCanonicalUrl, generateAlternateUrls } from '@/lib/canonical-url'
import PressPageComponent from '@/components/pages/press-page'

interface LocalePressPageProps {
  params: { locale: string }
}

export async function generateMetadata({ params }: LocalePressPageProps): Promise<Metadata> {
  if (!isValidLocale(params.locale)) {
    return {}
  }

  const locale = params.locale as Locale
  const title = getTranslation(locale, 'pages.press.title')
  const description = getTranslation(locale, 'pages.press.description')
  const siteName = getTranslation(locale, 'seo.siteName')
  
  const canonicalUrl = generateCanonicalUrl('/press', locale)
  const alternateUrls = generateAlternateUrls('/press', locales)
  
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

export default function LocalePressPage({ params }: LocalePressPageProps) {
  if (!isValidLocale(params.locale)) {
    notFound()
  }
  return <PressPageComponent />
}

export function generateStaticParams() {
  return [
    { locale: 'en' }, { locale: 'en-AU' }, { locale: 'en-IE' }, { locale: 'en-NZ' },
    { locale: 'es' }, { locale: 'de' }, { locale: 'fr' }, { locale: 'pt' },
    { locale: 'ja' }, { locale: 'ko' }, { locale: 'it' }, { locale: 'nl' },
    { locale: 'nb-NO' }, { locale: 'hr-HR' },
  ]
}