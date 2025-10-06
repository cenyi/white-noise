"use client";

import { Shield, Lock, Eye, Code, Zap, Accessibility } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/language-context";

export function TrustSection() {
  const { t } = useLanguage();

  const trustItems = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: t("trust.noAds.title"),
      description: t("trust.noAds"),
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: t("trust.dataMinimization.title"),
      description: t("trust.dataMinimization"),
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: t("trust.privacyPolicy.title"),
      description: t("trust.privacyPolicy"),
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: t("trust.openSource.title"),
      description: t("trust.openSource"),
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: t("trust.performance.title"),
      description: t("trust.performance"),
    },
    {
      icon: <Accessibility className="h-6 w-6" />,
      title: t("trust.accessibility.title"),
      description: t("trust.accessibility"),
    },
  ];

  return (
    <section id="trust" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            {t("trust.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t("trust.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustItems.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-lg border bg-muted/30 backdrop-blur-sm"
            >
              <div className="p-2 rounded-full bg-primary/10 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" asChild>
            <a href={t("trust.github.url")} target="_blank" rel="noopener noreferrer nofollow">
              {t("trust.viewSource")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}