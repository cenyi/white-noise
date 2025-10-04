import Link from 'next/link'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isValidLocale, type Locale } from '@/lib/i18n/config'
import { getTranslation } from '@/lib/i18n'

interface LocaleNotFoundProps {
  params: { locale: string }
}

export async function generateMetadata({ params }: LocaleNotFoundProps): Promise<Metadata> {
  if (!params?.locale || !isValidLocale(params.locale)) {
    return {}
  }

  const locale = params.locale as Locale
  const title = getTranslation(locale, 'notFound.title')
  const description = getTranslation(locale, 'notFound.description')
  
  return {
    title,
    description,
    robots: { index: false, follow: false }
  }
}

export default function LocaleNotFound({ params }: LocaleNotFoundProps) {
  if (!params?.locale || !isValidLocale(params.locale)) {
    notFound()
  }

  const locale = params.locale as Locale

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated Sound Waves */}
        <div className="mb-8 relative">
          <div className="flex justify-center items-center space-x-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse"
                style={{
                  width: `${8 + i * 4}px`,
                  height: `${20 + i * 10}px`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '1.5s'
                }}
              />
            ))}
            {[...Array(4)].map((_, i) => (
              <div
                key={i + 5}
                className="bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse"
                style={{
                  width: `${20 - i * 4}px`,
                  height: `${50 - i * 10}px`,
                  animationDelay: `${(i + 5) * 0.2}s`,
                  animationDuration: '1.5s'
                }}
              />
            ))}
          </div>
          
          {/* 404 in a creative way */}
          <div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mb-4">
            4🌊4
          </div>
        </div>

        {/* Main Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {getTranslation(locale, 'notFound.title')}
        </h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          {getTranslation(locale, 'notFound.description')}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link 
            href={`/${locale}`}
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            {getTranslation(locale, 'notFound.returnHome')}
          </Link>
          
          <Link 
            href={`/${locale}`}
            className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
            {getTranslation(locale, 'notFound.exploreSounds')}
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {getTranslation(locale, 'notFound.helpfulLinks')}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href={`/${locale}/about`} className="text-blue-600 dark:text-blue-400 hover:underline">
              {getTranslation(locale, 'nav.about')}
            </Link>
            <Link href={`/${locale}/help`} className="text-blue-600 dark:text-blue-400 hover:underline">
              {getTranslation(locale, 'nav.faq')}
            </Link>
            <Link href={`/${locale}/contact`} className="text-blue-600 dark:text-blue-400 hover:underline">
              {getTranslation(locale, 'footer.contact')}
            </Link>
            <Link href={`/${locale}/privacy`} className="text-blue-600 dark:text-blue-400 hover:underline">
              {getTranslation(locale, 'footer.privacy')}
            </Link>
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="mt-12 p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700">
          <blockquote className="text-gray-700 dark:text-gray-300 italic">
            {getTranslation(locale, 'notFound.quote')}
          </blockquote>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">— SereneSoul</p>
        </div>
      </div>
    </div>
  )
}