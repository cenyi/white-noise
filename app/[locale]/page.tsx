import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isValidLocale, type Locale, locales } from '@/lib/i18n/config'
import { getTranslation } from '@/lib/i18n'
import { generateCanonicalUrl, generateAlternateUrls } from '@/lib/canonical-url'

import { HomePage } from "@/components/home-page"

interface LocalePageProps {
  params: { locale: string }
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  if (!isValidLocale(params.locale)) {
    return {}
  }

  const locale = params.locale as Locale
  const siteName = getTranslation(locale, 'seo.siteName')
  const description = getTranslation(locale, 'seo.description.short')
  const tagline = getTranslation(locale, 'seo.tagline')
  
  const canonicalUrl = generateCanonicalUrl('/', locale)
  const alternateUrls = generateAlternateUrls('/', locales)

  return {
    title: `${siteName} - ${tagline}`,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: alternateUrls,
    },
    openGraph: {
      title: `${siteName} - ${tagline}`,
      description,
      url: canonicalUrl,
      siteName,
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${siteName} - ${tagline}`,
      description,
    },
    robots: {
      index: true,
      follow: true,
    }
  }
}

export default function LocalePage({ params }: LocalePageProps) {
  if (!isValidLocale(params.locale)) {
    notFound()
  }

  return <HomePage />
}

export function generateStaticParams() {
  return [
    { locale: 'en' }, { locale: 'en-AU' }, { locale: 'en-IE' }, { locale: 'en-NZ' },
    { locale: 'es' }, { locale: 'de' }, { locale: 'fr' }, { locale: 'pt' },
    { locale: 'ja' }, { locale: 'ko' }, { locale: 'it' }, { locale: 'nl' },
    { locale: 'nb-NO' }, { locale: 'hr-HR' },
  ]
}