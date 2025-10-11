"use client"

import { Leaf, Truck, Award, Heart } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function FeaturesSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Leaf,
      title: t("organicTitle"),
      description: t("organicDescription"),
    },
    {
      icon: Truck,
      title: t("fastDeliveryTitle"),
      description: t("fastDeliveryDescription"),
    },
    {
      icon: Award,
      title: t("premiumQualityTitle"),
      description: t("premiumQualityDescription"),
    },
    {
      icon: Heart,
      title: t("healthBenefitsTitle"),
      description: t("healthBenefitsDescription"),
    },
  ]

  return (
    <section id="benefits" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{t("whyChoose")}</h2>
          <p className="text-lg text-muted-foreground text-pretty">{t("whyChooseDescription")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-card border rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-pretty">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
