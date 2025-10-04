"use client"

import { Shield, Zap, Heart, Headphones, Download, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

export function FeaturesSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Zap,
      title: t("features.free.title"),
      description: t("features.free.description"),
      color: "text-yellow-500",
    },
    {
      icon: Shield,
      title: t("features.noads.title"),
      description: t("features.noads.description"),
      color: "text-green-500",
    },
    {
      icon: Heart,
      title: t("features.privacy.title"),
      description: t("features.privacy.description"),
      color: "text-red-500",
    },
    {
      icon: Headphones,
      title: t("features.quality.title"),
      description: t("features.quality.description"),
      color: "text-blue-500",
    },
    {
      icon: Download,
      title: t("features.offlineReady.title"),
      description: t("features.offlineReady.description"),
      color: "text-purple-500",
    },
    {
      icon: Globe,
      title: t("features.multiLanguage.title"),
      description: t("features.multiLanguage.description"),
      color: "text-cyan-500",
    },
  ]

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">{t("features.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t("features.description")}
          </p>
          
          {/* Additional SEO content */}
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty mt-4 leading-relaxed">
            {t("features.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-0 bg-card/50 backdrop-blur"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-background/80 ${feature.color} shrink-0`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg text-balance group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm text-pretty leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
