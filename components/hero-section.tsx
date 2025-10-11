"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-sm font-medium text-primary bg-accent px-4 py-2 rounded-full">
                {t("freshOrganic")}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">{t("heroTitle")}</h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl text-pretty">{t("heroDescription")}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base">
                {t("browseFruits")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent">
                {t("learnMore")}
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">{t("happyCustomers")}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">{t("fruitVarieties")}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">{t("organic")}</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-accent/30">
              <img
                src="/colorful-fresh-fruits-arrangement-with-strawberrie.jpg"
                alt="Fresh fruits"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border shadow-lg rounded-2xl p-6 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-2xl">🍓</div>
                <div>
                  <div className="font-semibold">{t("freshDaily")}</div>
                  <div className="text-sm text-muted-foreground">{t("deliveredWithin")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
