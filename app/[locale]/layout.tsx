import { notFound } from 'next/navigation'
import { isValidLocale, type Locale, locales } from '@/lib/i18n/config'
import { LanguageProvider } from '@/contexts/language-context'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { generateCanonicalUrl, generateAlternateUrls } from '@/lib/canonical-url'
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

  return {
    alternates: {
      canonical: canonicalUrl,
      languages: alternateUrls,
    },
  }
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  // Validate locale
  if (!isValidLocale(params.locale)) {
    notFound()
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
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