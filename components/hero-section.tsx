"use client"

import { Play, Headphones, Heart, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export function HeroSection() {
  const { t } = useLanguage()

  const scrollToSounds = () => {
    document.getElementById("sounds")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/serene-forest-with-soft-morning-light-filtering-th.jpg" 
          alt="Peaceful nature background with white noise and natural sounds for relaxation, sleep, and focus" 
          fill
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/60 dark:bg-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <Badge variant="secondary" className="gap-2 px-4 py-2 text-sm">
            <Zap className="h-4 w-4" />
            {t("hero.benefits.noAds")} • {t("hero.benefits.free")} • {t("hero.benefits.offline")}
          </Badge>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">{t("hero.title")}</h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium text-balance">
              {t("hero.subtitle")}
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {t("hero.description")}
          </p>
          
          {/* Additional Content for SEO */}
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            {t("seo.hero.description")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" onClick={scrollToSounds} className="gap-2 px-8 py-6 text-lg">
              <Play className="h-5 w-5" />
              {t("hero.startListening")}
            </Button>
            <Button variant="outline" size="lg" className="gap-2 px-8 py-6 text-lg bg-transparent" onClick={() => {
              document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
            }}>
              <Headphones className="h-5 w-5" />
              {t("hero.browseSounds")}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{t("hero.stats.soundsCount")}</div>
              <div className="text-sm text-muted-foreground">{t("hero.stats.sounds")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">0</div>
              <div className="text-sm text-muted-foreground">{t("hero.stats.ads")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10</div>
              <div className="text-sm text-muted-foreground">{t("hero.stats.language")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2 flex items-center justify-center gap-1">
                <Heart className="h-6 w-6 text-red-500 fill-current" />
              </div>
              <div className="text-sm text-muted-foreground">{t("hero.stats.love")}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/30 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
