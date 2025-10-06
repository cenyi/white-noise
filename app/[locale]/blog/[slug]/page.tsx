import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isValidLocale, type Locale, locales } from '@/lib/i18n/config'
import { getTranslation } from '@/lib/i18n'
import { generateCanonicalUrl, generateAlternateUrls } from '@/lib/canonical-url'

// Import your existing blog article page component
import BlogArticlePageComponent from '@/components/pages/blog-article-page'

interface LocaleBlogArticlePageProps {
  params: { locale: string; slug: string }
}

const blogArticles = [
  {
    slug: "what-is-white-noise-ultimate-2025-guide",
    titleKey: "pages.blog.article1.title",
    excerptKey: "pages.blog.article1.excerpt",
  },
  {
    slug: "how-to-use-white-noise-for-better-sleep",
    titleKey: "pages.blog.article2.title",
    excerptKey: "pages.blog.article2.excerpt",
  },
  {
    slug: "best-white-noise-machines-2025",
    titleKey: "pages.blog.article3.title",
    excerptKey: "pages.blog.article3.excerpt",
  }
]

export async function generateMetadata({ params }: LocaleBlogArticlePageProps): Promise<Metadata> {
  if (!isValidLocale(params.locale)) {
    return {}
  }

  const locale = params.locale as Locale
  const article = blogArticles.find(a => a.slug === params.slug)
  
  if (!article) {
    return {}
  }

  const title = getTranslation(locale, article.titleKey as any)
  const description = getTranslation(locale, article.excerptKey as any)
  const siteName = getTranslation(locale, 'seo.siteName')
  
  const canonicalUrl = generateCanonicalUrl(`/blog/${params.slug}`, locale)
  const alternateUrls = generateAlternateUrls(`/blog/${params.slug}`, locales)

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
      type: 'article',
    },
    robots: {
      index: true,
      follow: true,
    }
  }
}

export default function LocaleBlogArticlePage({ params }: LocaleBlogArticlePageProps) {
  if (!isValidLocale(params.locale)) {
    notFound()
  }

  const article = blogArticles.find(a => a.slug === params.slug)
  if (!article) {
    notFound()
  }

  return <BlogArticlePageComponent params={{ slug: params.slug }} />
}

export function generateStaticParams() {
  const locales = ['en', 'en-AU', 'en-IE', 'en-NZ', 'es', 'de', 'fr', 'pt', 'ja', 'ko', 'it', 'nl', 'nb-NO', 'hr-HR']
  const params = []

  for (const locale of locales) {
    for (const article of blogArticles) {
      params.push({
        locale,
        slug: article.slug
      })
    }
  }

  return params
}