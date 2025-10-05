import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
// Remove LanguageProvider import as it will be handled in locale layout
import { APP_CONFIG } from "@/lib/config"
import "./globals.css"

// Generate structured data for SEO
function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "SereneSoul",
    "description": "Discover dozens of high-quality natural sounds including white noise, rain, ocean waves, forest ambience, and wildlife. 100% free, no ads, no registration required. Perfect for sleep, meditation, focus, and relaxation.",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Organization",
      "name": "SereneSoul"
    },
    "softwareVersion": "1.0.0",
    "isAccessibleForFree": true,
    "featureList": [
      "100% Free",
      "No Ads",
      "No Registration Required",
      "No Privacy Issues",
      "Uses Google Analytics Only",
      "White Noise",
      "Rain Sounds", 
      "Ocean Waves",
      "Forest Sounds",
      "Ambient Sounds",
      "Sleep Sounds",
      "Focus Sounds",
      "Meditation Sounds",
      "Multiple Languages"
    ],
    "conditionsOfAccess": "Free no-registration",
    "hasHealthAspect": "Wellness", 
    "audience": {
      "@type": "Audience",
      "name": "People seeking focus, sleep, and relaxation"
    }
  };
}

export const metadata: Metadata = {
  title: "SereneSoul - 100% Free White Noise & Natural Sounds (No Ads, No Registration) for Sleep, Focus & Relaxation",
  description:
    "Discover dozens of high-quality natural sounds including white noise, rain, ocean waves, forest ambience, and wildlife. Completely 100% free with no ads, no registration required. Perfect for sleep, meditation, focus, and relaxation.",
  keywords:
    "white noise, natural sounds, rain sounds, ocean waves, forest sounds, focus music, sleep sounds, relaxation, meditation, ambient sounds, nature sounds, free, no ads, no registration, privacy",
  authors: [{ name: "SereneSoul" }],
  creator: "SereneSoul",
  publisher: "SereneSoul",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://afunning.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "ga-IE": "/ga-IE",
      "mi-NZ": "/mi-NZ",
      fr: "/fr",
      de: "/de",
      es: "/es",
      pt: "/pt",
      ja: "/ja",
      ru: "/ru",
      ko: "/ko",
      ar: "/ar",
      bn: "/bn",
      ur: "/ur",
      id: "/id",
      pa: "/pa",
      fa: "/fa",
      vi: "/vi",
      te: "/te",
      ha: "/ha",
      tr: "/tr",
      ta: "/ta",
    },
  },
  openGraph: {
    title: "SereneSoul - 100% Free White Noise & Natural Sounds (No Ads, No Registration) for Sleep, Focus & Relaxation",
    description:
      "Discover dozens of high-quality natural sounds including white noise, rain, ocean waves, and forest ambience. Completely 100% free with no ads, no registration required.",
    url: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
    siteName: process.env.NEXT_PUBLIC_SITE_NAME || "SereneSoul",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SereneSoul - 100% Free Natural White Noise App (No Ads, No Registration) for Sleep, Focus & Relaxation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SereneSoul - 100% Free White Noise & Natural Sounds (No Ads, No Registration) for Sleep, Focus & Relaxation",
    description:
      "Discover dozens of high-quality natural sounds including white noise, rain, ocean waves, and forest ambience. Completely 100% free with no ads, no registration required.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION_CODE,
  },
    generator: 'afunning'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content={APP_CONFIG.THEME_COLOR} />
        <meta name="color-scheme" content="light dark" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateStructuredData())
          }}
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5VJN7WR6');`
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5VJN7WR6"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
