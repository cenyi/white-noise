import { getTranslation } from "@/lib/i18n/server"
import { type Locale } from "@/lib/i18n/config"

interface WebSiteSchemaProps {
  locale: Locale
  siteUrl: string
}

export async function WebSiteSchema({ locale, siteUrl }: WebSiteSchemaProps) {
  const [siteName, description] = await Promise.all([
    getTranslation("seo.siteName", locale),
    getTranslation("seo.description.full", locale)
  ])

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteName,
    "alternateName": description,
    "url": siteUrl,
    "inLanguage": locale,
    "description": description,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteUrl}/${locale}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": siteName,
      "url": siteUrl
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface WebPageSchemaProps {
  locale: Locale
  siteUrl: string
  path: string
  title: string
  description: string
}

export async function WebPageSchema({ locale, siteUrl, path, title, description }: WebPageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": `${siteUrl}${path}`,
    "inLanguage": locale,
    "isPartOf": {
      "@type": "WebSite",
      "name": siteUrl,
      "url": siteUrl
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": siteUrl
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": title,
          "item": `${siteUrl}${path}`
        }
      ]
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface OrganizationSchemaProps {
  siteUrl: string
  locale: Locale
}

export async function OrganizationSchema({ siteUrl, locale }: OrganizationSchemaProps) {
  const [siteName, description, githubUrl, twitterUrl] = await Promise.all([
    getTranslation("seo.siteName", locale),
    getTranslation("seo.description.full", locale),
    getTranslation("footer.github.url", locale),
    getTranslation("footer.twitter.url", locale)
  ])

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteName,
    "url": siteUrl,
    "description": description,
    "sameAs": [
      githubUrl,
      twitterUrl
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": `${siteUrl}/contact`
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}


interface SoftwareApplicationSchemaProps {
  siteUrl: string
  locale: Locale
}

export async function SoftwareApplicationSchema({ siteUrl, locale }: SoftwareApplicationSchemaProps) {
  const [siteName, description] = await Promise.all([
    getTranslation("seo.siteName", locale),
    getTranslation("seo.description.full", locale)
  ])

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": siteName,
    "description": description,
    "url": siteUrl,
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1000"
    },
    "creator": {
      "@type": "Organization",
      "name": siteName,
      "url": siteUrl
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}