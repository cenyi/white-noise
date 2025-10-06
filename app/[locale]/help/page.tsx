import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isValidLocale, type Locale, locales } from '@/lib/i18n/config'
import { getTranslation } from '@/lib/i18n'
import { generateCanonicalUrl, generateAlternateUrls } from '@/lib/canonical-url'
import HelpPageComponent from '@/components/pages/help-page'

interface LocaleHelpPageProps {
  params: { locale: string }
}

export async function generateMetadata({ params }: LocaleHelpPageProps): Promise<Metadata> {
  if (!isValidLocale(params.locale)) {
    return {}
  }

  const locale = params.locale as Locale
  const title = getTranslation(locale, 'pages.help.title')
  const description = getTranslation(locale, 'pages.help.description')
  const siteName = getTranslation(locale, 'seo.siteName')
  
  const canonicalUrl = generateCanonicalUrl('/help', locale)
  const alternateUrls = generateAlternateUrls('/help', locales)
  
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

export default function LocaleHelpPage({ params }: LocaleHelpPageProps) {
  if (!isValidLocale(params.locale)) {
    notFound()
  }
  return <HelpPageComponent />
}

export function generateStaticParams() {
  return [
    { locale: 'en' }, { locale: 'en-AU' }, { locale: 'en-IE' }, { locale: 'en-NZ' },
    { locale: 'es' }, { locale: 'de' }, { locale: 'fr' }, { locale: 'pt' },
    { locale: 'ja' }, { locale: 'ko' }, { locale: 'it' }, { locale: 'nl' },
    { locale: 'nb-NO' }, { locale: 'hr-HR' },
  ]
}