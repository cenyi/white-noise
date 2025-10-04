import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isValidLocale, type Locale, locales } from '@/lib/i18n/config'
import { getTranslation } from '@/lib/i18n'
import { generateCanonicalUrl, generateAlternateUrls } from '@/lib/canonical-url'
import ReportPageComponent from '@/components/pages/report-page'

interface LocaleReportPageProps {
  params: { locale: string }
}

export async function generateMetadata({ params }: LocaleReportPageProps): Promise<Metadata> {
  if (!isValidLocale(params.locale)) {
    return {}
  }

  const locale = params.locale as Locale
  const title = getTranslation(locale, 'pages.report.title')
  const description = getTranslation(locale, 'pages.report.description')
  const siteName = getTranslation(locale, 'seo.siteName')
  
  const canonicalUrl = generateCanonicalUrl('/report', locale)
  const alternateUrls = generateAlternateUrls('/report', locales)
  
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

export default function LocaleReportPage({ params }: LocaleReportPageProps) {
  if (!isValidLocale(params.locale)) {
    notFound()
  }
  return <ReportPageComponent />
}

export function generateStaticParams() {
  return [
    { locale: 'en' }, { locale: 'es' }, { locale: 'de' }, { locale: 'fr' },
    { locale: 'pt' }, { locale: 'ja' }, { locale: 'ko' }, { locale: 'it' }, { locale: 'nl' },
  ]
}