import { MetadataRoute } from 'next'
import { locales, getLocalizedPath } from '@/lib/i18n/config'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://afunning.com'

// Define all your routes here - these are the base paths without locale
const routes = [
  '/',
  '/blog',
  '/blog/what-is-white-noise-ultimate-2025-guide',
  '/blog/white-noise-better-sleep-techniques',
  '/blog/best-white-noise-machines-2025-reviews',
  '/privacy',
  '/terms',
  '/cookies',
  '/contact',
  '/help',
  '/report',
  '/about',
  '/press',
  // Add more blog posts here as you create them
  // Add more pages here as you create them
]

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemap: MetadataRoute.Sitemap = []

  // Add routes for each locale
  routes.forEach((route) => {
    locales.forEach((locale) => {
      const localizedPath = getLocalizedPath(route, locale)
      const url = `${siteUrl}${localizedPath}`
      
      sitemap.push({
        url,
        lastModified: new Date(),
        changeFrequency: route === '/' ? 'daily' : 'weekly',
        priority: route === '/' ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((lang) => [
              lang,
              `${siteUrl}${getLocalizedPath(route, lang)}`
            ])
          )
        }
      })
    })
  })

  return sitemap
}