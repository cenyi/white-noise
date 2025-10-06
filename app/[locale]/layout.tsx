import { notFound } from 'next/navigation'
import { isValidLocale, type Locale, locales } from '@/lib/i18n/config'
import { getTranslation } from '@/lib/i18n/server'
import { LanguageProvider } from '@/contexts/language-context'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { generateCanonicalUrl, generateAlternateUrls } from '@/lib/canonical-url'
import { WebSiteSchema, OrganizationSchema } from '@/components/structured-data'
import type { Metadata } from 'next'

interface LocaleLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  if (!isValidLocale(params.locale)) {
    return {}
  }

  const locale = params.locale as Locale
  const canonicalUrl = generateCanonicalUrl('/', locale)
  const alternateUrls = generateAlternateUrls('/', locales)

  // Get localized metadata
  const [title, description, keywords] = await Promise.all([
    getTranslation('seo.title', locale),
    getTranslation('seo.description', locale),
    getTranslation('seo.keywords_full', locale),
  ])

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: alternateUrls,
    },
  }
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  // Validate locale
  if (!isValidLocale(params.locale)) {
    notFound()
  }

  const locale = params.locale as Locale
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://afunning.com'

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        {/* 结构化数据 */}
        <WebSiteSchema locale={locale} siteUrl={siteUrl} />
        <OrganizationSchema siteUrl={siteUrl} locale={locale} />

        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'en-AU' },
    { locale: 'en-IE' },
    { locale: 'en-NZ' },
    { locale: 'es' },
    { locale: 'de' },
    { locale: 'fr' },
    { locale: 'pt' },
    { locale: 'ja' },
    { locale: 'ko' },
    { locale: 'it' },
    { locale: 'nl' },
    { locale: 'nb-NO' },
    { locale: 'hr-HR' },
  ]
}