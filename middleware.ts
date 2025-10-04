import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { defaultLocale, locales, isValidLocale, getLocaleFromPath } from './lib/i18n/config'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Handle trailing slash redirects first
  // Redirect URLs with trailing slash to URLs without trailing slash
  if (pathname !== '/' && pathname.endsWith('/')) {
    const urlWithoutTrailingSlash = pathname.slice(0, -1)
    const redirectUrl = new URL(urlWithoutTrailingSlash + request.nextUrl.search, request.url)
    return NextResponse.redirect(redirectUrl, 301) // 301 permanent redirect
  }

  // Check if pathname already has a locale
  const { locale, pathWithoutLocale } = getLocaleFromPath(pathname)

  // If pathname starts with a locale, continue
  if (locale !== defaultLocale) {
    return NextResponse.next()
  }

  // If path doesn't have locale, redirect to default locale (English)
  // This ensures all URLs have a locale prefix
  if (pathname !== '/' && !pathname.startsWith('/en')) {
    const redirectUrl = new URL(`/en${pathname}`, request.url)
    return NextResponse.redirect(redirectUrl, 301) // 301 permanent redirect
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, etc)
    '/((?!_next|api|favicon.ico|robots.txt|sitemap.xml|.*\\.).*)',
  ],
}