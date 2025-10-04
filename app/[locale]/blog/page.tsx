import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isValidLocale, type Locale, locales } from '@/lib/i18n/config'
import { getTranslation } from '@/lib/i18n'
import { generateCanonicalUrl, generateAlternateUrls } from '@/lib/canonical-url'

// Import your existing blog page component
import BlogPageComponent from '@/components/pages/blog-page'

interface LocaleBlogPageProps {
  params: { locale: string }
}

export async function generateMetadata({ params }: LocaleBlogPageProps): Promise<Metadata> {
  if (!isValidLocale(params.locale)) {
    return {}
  }

  const locale = params.locale as Locale
  const title = getTranslation(locale, 'pages.blog.title')
  const description = getTranslation(locale, 'pages.blog.description')
  const siteName = getTranslation(locale, 'seo.siteName')
  
  const canonicalUrl = generateCanonicalUrl('/blog', locale)
  const alternateUrls = generateAlternateUrls('/blog', locales)

  return {
    title: `${title} - ${siteName}`,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: alternateUrls,
    },
    openGraph: {
      title: `${title} - ${siteName}`,
      description,
      url: canonicalUrl,
      siteName,
      locale,
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
    }
  }
}

export default function LocaleBlogPage({ params }: LocaleBlogPageProps) {
  if (!isValidLocale(params.locale)) {
    notFound()
  }

  return <BlogPageComponent />
}

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'es' },
    { locale: 'de' },
    { locale: 'fr' },
    { locale: 'pt' },
    { locale: 'ja' },
    { locale: 'ko' },
    { locale: 'it' },
    { locale: 'nl' },
  ]
}