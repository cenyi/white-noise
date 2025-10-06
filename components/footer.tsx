"use client"

import Link from "next/link"
import { Waves, Heart, Github, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t, locale } = useLanguage()

  const footerLinks = [
    {
      title: t("footer.legal"),
      links: [
        { label: t("footer.privacy"), href: `/${locale}/privacy` },
        { label: t("footer.terms"), href: `/${locale}/terms` },
        { label: t("footer.cookies"), href: `/${locale}/cookies` },
      ],
    },
    {
      title: t("footer.support"),
      links: [
        { label: t("footer.contact"), href: `/${locale}/contact` },
        { label: t("footer.helpCenter"), href: `/${locale}/help` },
        { label: t("footer.reportIssue"), href: `/${locale}/report` },
      ],
    },
    {
      title: t("footer.company"),
      links: [
        { label: t("footer.about"), href: `/${locale}/about` },
        { label: t("footer.blog"), href: `/${locale}/blog` },
        { label: t("footer.pressKit"), href: `/${locale}/press` },
      ],
    },
  ]

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 font-semibold text-xl">
              <Waves className="h-6 w-6 text-primary" />
              {t("seo.siteName")}
            </Link>
            <p className="text-muted-foreground text-pretty max-w-md leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">{t("footer.madeWith")}</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span className="text-sm text-muted-foreground">{t("footer.forWellBeing")}</span>
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="font-semibold text-sm uppercase tracking-wider">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {t("footer.copyright")}
          </div>

          <div className="flex items-center gap-2">
            {/* Buy Me A Coffee Button */}
            <a href={t("footer.buyMeACoffee.url")} target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <img
                src="https://cdn.buymeacoffee.com/buttons/default-orange.png"
                alt={t("footer.buyMeACoffee.alt")}
                className="h-8 w-auto"
              />
            </a>
            
            <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
              <Link href={t("footer.github.url")} target="_blank" rel="noopener noreferrer nofollow">
                <Github className="h-4 w-4" />
                <span className="sr-only">{t("footer.social.github")}</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
              <Link href={t("footer.twitter.url")} target="_blank" rel="noopener noreferrer nofollow">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">{t("footer.social.twitter")}</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
              <Link href={t("footer.email.url")}>
                <Mail className="h-4 w-4" />
                <span className="sr-only">{t("footer.social.email")}</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
