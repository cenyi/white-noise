import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import { defaultLocale, locales } from '@/lib/i18n/config'

export default function RootPage() {
  // Get accept-language header for language detection
  const headersList = headers()
  const acceptLanguage = headersList.get('accept-language')

  // Simple language detection
  let detectedLocale = defaultLocale
  if (acceptLanguage) {
    for (const locale of locales) {
      if (acceptLanguage.toLowerCase().includes(locale.toLowerCase())) {
        detectedLocale = locale
        break
      }
    }
  }

  // Redirect to detected locale (or default)
  if (detectedLocale === defaultLocale) {
    redirect('/en')
  } else {
    redirect(`/${detectedLocale}`)
  }
}
