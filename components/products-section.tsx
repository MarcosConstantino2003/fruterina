"use client"

import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ProductsSection() {
  const { t } = useLanguage()

  const products = [
    {
      name: t("organicStrawberries"),
      price: "$8.99",
      unit: t("perLb"),
      image: "/images/strawberries.png",
      rating: 4.9,
      badge: t("bestseller"),
    },
    {
      name: t("tropicalMango"),
      price: "$6.49",
      unit: t("perLb"),
      image: "/ripe-yellow-mango-fruit.jpg",
      rating: 4.8,
      badge: t("new"),
    },
    {
      name: t("freshBlueberries"),
      price: "$12.99",
      unit: t("perPint"),
      image: "/fresh-blueberries-in-container.jpg",
      rating: 4.9,
      badge: null,
    },
    {
      name: t("organicAvocados"),
      price: "$4.99",
      unit: t("each"),
      image: "/ripe-avocado-halves.png",
      rating: 4.7,
      badge: t("popular"),
    },
  ]

  return (
    <section id="products" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{t("ourSelection")}</h2>
          <p className="text-lg text-muted-foreground text-pretty">{t("ourSelectionDescription")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-card border rounded-2xl overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="relative aspect-square overflow-hidden bg-accent/20">
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                      {product.badge}
                    </span>
                  </div>
                )}
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>
                <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  <span className="text-sm text-muted-foreground">{product.unit}</span>
                </div>
                <Button className="w-full">{t("addToCart")}</Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            {t("viewAllProducts")}
          </Button>
        </div>
      </div>
    </section>
  )
}
