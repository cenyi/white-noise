"use client"

import { useLanguage } from "@/contexts/language-context"

export default function PrivacyPageComponent() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">
            {t("pages.privacy.title")}
          </h1>

          <div className="prose prose-slate max-w-none dark:prose-invert">
            <p className="text-lg text-muted-foreground mb-8">
              {t("pages.privacy.description")}
            </p>

            <div
              className="whitespace-pre-wrap text-foreground leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: t("pages.privacy.content")
                  .replace(/\n\n/g, '</p><p class="mt-6 mb-6">')
                  .replace(/\n/g, '<br />')
                  .replace(/^<p>/, '<p class="text-foreground">')
                  .replace(/## (.+)/g, '<h2 class="text-2xl font-semibold mt-8 mb-4 text-foreground">$1</h2>')
                  .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold">$1</strong>')
                  .replace(/- (.+)/g, '<li class="ml-6 list-disc">$1</li>')
                  .replace(/(<li.*<\/li>)/gs, '<ul class="mb-6 space-y-2">$1</ul>')
              }}
            />
          </div>

          <div className="mt-12 p-6 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground text-center">
              {t("pages.privacy.lastUpdated", "Last updated: October 2025")}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}