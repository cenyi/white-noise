"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Waves } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { LanguageSwitcher } from "./language-switcher"

import { useLanguage } from "@/contexts/language-context"

export function Navigation() {
  const { t, locale } = useLanguage()
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Check if we're on the homepage
  const isHomepage = pathname === `/${locale}` || (locale === 'en' && pathname === '/')

  const navItems = [
    { href: isHomepage ? "#home" : `/${locale}#home`, label: t("nav.home") },
    { href: isHomepage ? "#sounds" : `/${locale}#sounds`, label: t("nav.sounds") },
    { href: isHomepage ? "#features" : `/${locale}#features`, label: t("nav.features") },
    { href: isHomepage ? "#faq" : `/${locale}#faq`, label: t("nav.faq") },
    { href: `/${locale}/blog`, label: t("nav.blog") },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
            <Waves className="h-6 w-6 text-primary" />
            <span className="hidden sm:inline">{t("seo.siteName")}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <Button 
              variant="default" 
              size="sm" 
              className="hidden md:inline-flex"
              onClick={() => {
                document.getElementById("sounds")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t("nav.listenNow")}
            </Button>
            
            <div className="hidden sm:flex items-center gap-2">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-12 w-12"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur">
            <div className="py-4 space-y-3">
              <Button 
                variant="default" 
                className="w-full mb-3 mx-4"
                onClick={() => {
                  document.getElementById("sounds")?.scrollIntoView({ behavior: "smooth" });
                  setIsMobileMenuOpen(false);
                }}
              >
                {t("nav.listenNow")}
              </Button>
              
              {navItems.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors min-h-[48px] flex items-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
              ))}

              <div className="px-4 pt-2 border-t flex items-center gap-2 sm:hidden">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
