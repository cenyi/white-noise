"use client";

import { Play, Globe, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/language-context";

export function HowItWorksSection() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: t("howItWorks.step1.title"),
      description: t("howItWorks.step1.description"),
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: t("howItWorks.step2.title"),
      description: t("howItWorks.step2.description"),
    },
    {
      icon: <Play className="h-8 w-8 text-primary" />,
      title: t("howItWorks.step3.title"),
      description: t("howItWorks.step3.description"),
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            {t("howItWorks.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t("howItWorks.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg border bg-background/50 backdrop-blur-sm"
            >
              <div className="p-3 rounded-full bg-primary/10">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold">
                {index + 1}. {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}