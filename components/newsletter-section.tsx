"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const { t } = useLanguage()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{t("newsletterTitle")}</h2>
          <p className="text-lg mb-8 opacity-90 text-pretty">{t("newsletterDescription")}</p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder={t("enterEmail")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-primary-foreground text-foreground flex-1"
            />
            <Button type="submit" variant="secondary" size="lg" className="sm:w-auto">
              {t("subscribe")}
            </Button>
          </form>

          <p className="text-sm mt-4 opacity-75">{t("privacyNote")}</p>
        </div>
      </div>
    </section>
  )
}
