"use client"

import { HeroSection } from "@/components/hero-section"
import { SoundGrid } from "@/components/sound-grid"
import { AudioPlayer } from "@/components/audio-player"
import { PlayHistory } from "@/components/play-history"
import { FavoritesPanel } from "@/components/favorites-panel"
import { FeaturesSection } from "@/components/features-section"
import { FAQSection } from "@/components/faq-section"
import { HowItWorksSection } from "@/components/HowItWorksSection"
import { TrustSection } from "@/components/TrustSection"
import { useLanguage } from "@/contexts/language-context"

export function HomePage() {
  const { t, locale } = useLanguage()

  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        
        {/* Keyword-rich introduction for SEO */}
        <section className="py-12 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4 text-balance">{t("seo.content.section1.title")}</h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                {t("seo.description.keywordRich")}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <a href="#sounds" className="text-primary hover:underline px-4 py-2 min-w-[80px] text-center">{t("nav.sounds")}</a>
                <a href="#features" className="text-primary hover:underline px-4 py-2 min-w-[80px] text-center">{t("nav.features")}</a>
                <a href="#faq" className="text-primary hover:underline px-4 py-2 min-w-[80px] text-center">{t("nav.faq")}</a>
              </div>
            </div>
          </div>
        </section>

        {/* Sounds Section */}
        <section id="sounds" className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">{t("sounds.title")}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                {t("sounds.description")}
              </p>
              
              {/* Additional SEO content for white noise sound */}
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty mt-4 leading-relaxed">
                {t("sounds.additional.description")}
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3">
                <SoundGrid />
              </div>
              <div className="lg:col-span-1 space-y-6">
                <div className="sticky top-24 space-y-6">
                  <AudioPlayer />
                  <PlayHistory />
                  <FavoritesPanel />
                </div>
              </div>
            </div>
          </div>
        </section>

        <HowItWorksSection />
        <FeaturesSection />
        <TrustSection />
        <FAQSection />
        
        {/* Additional Content Section for SEO */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">{t("seo.content.section1.title")}</h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed mb-6">
                {t("seo.content.section1.description")}
              </p>
              
              <div className="text-left space-y-4 text-pretty leading-relaxed">
                <h3 className="text-xl font-semibold mt-8">{t("seo.content.section1.sub1")}</h3>
                <p>
                  {t("seo.content.section1.p1")}
                </p>
                
                <h3 className="text-xl font-semibold mt-8">{t("seo.content.section1.sub2")}</h3>
                <p>
                  {t("seo.content.section1.p2")}
                </p>
                
                <h3 className="text-xl font-semibold mt-8">{t("seo.content.section1.sub3")}</h3>
                <p>
                  {t("seo.content.section1.p3")}
                </p>
                
                <h3 className="text-xl font-semibold mt-8">{t("seo.content.section1.sub4")}</h3>
                <p>
                  {t("seo.content.section1.p4")}
                </p>
                
                <h3 className="text-xl font-semibold mt-8">{t("seo.content.section1.sub5")}</h3>
                <p>
                  {t("seo.content.section1.p5")}
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Additional Content Section 2 for SEO */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">{t("seo.content.section2.title")}</h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed mb-6">
                {t("seo.content.section2.description")}
              </p>
              
              <div className="text-left space-y-4 text-pretty leading-relaxed">
                <h3 className="text-xl font-semibold mt-8">{t("seo.content.section2.sub1")}</h3>
                <p>
                  {t("seo.content.section2.p1")}
                </p>
                
                <h3 className="text-xl font-semibold mt-8">{t("seo.content.section2.sub2")}</h3>
                <p>
                  {t("seo.content.section2.p2")}
                </p>
                
                <h3 className="text-xl font-semibold mt-8">{t("seo.content.section2.sub3")}</h3>
                <p>
                  {t("seo.content.section2.p3")}
                </p>
                
                <h3 className="text-xl font-semibold mt-8">{t("seo.content.section2.sub4")}</h3>
                <p>
                  {t("seo.content.section2.p4")}
                </p>
                
                <h3 className="text-xl font-semibold mt-8">{t("seo.content.section2.sub5")}</h3>
                <p>
                  {t("seo.content.section2.p5")}
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Additional Content Section 3 for SEO */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">{t("seo.content.section3.title")}</h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed mb-6">
                {t("seo.content.section3.description")}
              </p>
              
              <div className="text-left space-y-4 text-pretty leading-relaxed">
                <h3 className="text-xl font-semibold mt-8">{t("seo.content.section3.sub1")}</h3>
                <p>
                  {t("seo.content.section3.p1")}
                </p>

                <h3 className="text-xl font-semibold mt-8">{t("seo.content.section3.sub2")}</h3>
                <p>
                  {t("seo.content.section3.p2")}
                </p>

                <h3 className="text-xl font-semibold mt-8">{t("seo.content.section3.sub3")}</h3>
                <p>
                  {t("seo.content.section3.p3")}
                </p>

                <h3 className="text-xl font-semibold mt-8">{t("seo.content.section3.sub4")}</h3>
                <p>
                  {t("seo.content.section3.p4")}
                </p>

                <h3 className="text-xl font-semibold mt-8">{t("seo.content.section3.sub5")}</h3>
                <p>
                  {t("seo.content.section3.p5")}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Keyword-rich conclusion for SEO */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-balance">{t("seo.benefits.heading")}</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed mb-8">
              {t("seo.benefits.description")}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mt-8">
              <a href="#sounds" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity min-h-[48px] flex items-center justify-center">
                {t("hero.startListening")}
              </a>
              <a href="#features" className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors min-h-[48px] flex items-center justify-center">
                {t("nav.features")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}