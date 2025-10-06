"use client"

import { Card } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

interface FAQItem {
  question: string
  answer: string
}

export function FAQSection() {
  const { t } = useLanguage()

  const faqItems: FAQItem[] = [
    {
      question: t("faq.free.question"),
      answer: t("faq.free.answer"),
    },
    {
      question: t("faq.account.question"),
      answer: t("faq.account.answer"),
    },
    {
      question: t("faq.howMany.question"),
      answer: t("faq.howMany.answer"),
    },
    {
      question: t("faq.sleep.question"),
      answer: t("faq.sleep.answer"),
    },
    {
      question: t("faq.offline.question"),
      answer: t("faq.offline.answer"),
    },
    {
      question: t("faq.clearHistory.question"),
      answer: t("faq.clearHistory.answer"),
    },
    {
      question: t("faq.ads.question"),
      answer: t("faq.ads.answer"),
    },
    {
      question: t("faq.suggest.question"),
      answer: t("faq.suggest.answer"),
    },
    {
      question: t("faq.whatIsWhiteNoise.question"),
      answer: t("faq.whatIsWhiteNoise.answer"),
    },
    {
      question: t("faq.doesWhiteNoiseHelpStudy.question"),
      answer: t("faq.doesWhiteNoiseHelpStudy.answer"),
    },
    {
      question: t("faq.whyWhiteNoiseHelpSleep.question"),
      answer: t("faq.whyWhiteNoiseHelpSleep.answer"),
    },
    {
      question: t("faq.whatWhiteNoiseDoes.question"),
      answer: t("faq.whatWhiteNoiseDoes.answer"),
    },
  ]

  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">{t("faq.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t("faq.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {faqItems.map((item, index) => (
            <Card key={index} className="border-0 bg-card/50 backdrop-blur h-full">
              <div className="p-6">
                <h3 className="font-medium text-lg mb-3 text-balance">{item.question}</h3>
                <p className="text-muted-foreground text-pretty leading-relaxed">{item.answer}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
