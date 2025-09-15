"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, DollarSign } from "lucide-react"
import { motion } from "framer-motion"
import siteData from "@/content/site.json"

export default function Pricing() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <DollarSign className="w-4 h-4" />
            Pricing & Engagement
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-6">
            Transparent <span className="text-accent">Pricing</span> for Every Need
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Choose the engagement model that works best for your project. No hidden fees, no surprises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {siteData.pricing.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <Card
                className={`h-full relative transition-all duration-300 border-0 shadow-sm bg-card/50 backdrop-blur-sm hover:bg-card/80 ${
                  plan.popular ? "ring-2 ring-accent/20 shadow-lg scale-105 hover:shadow-xl" : "hover:shadow-xl"
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground shadow-sm">
                    Most Popular
                  </Badge>
                )}

                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold leading-tight">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed text-sm">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-accent">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Key Differentiator */}
                  <div className="bg-accent/5 rounded-lg p-4">
                    <p className="text-sm font-medium text-accent">{plan.differentiator}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-accent" />
                        </div>
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={scrollToContact}
                    className={`w-full transition-all duration-200 ${
                      plan.popular
                        ? "bg-accent hover:bg-accent/90 shadow-sm hover:shadow-md"
                        : "bg-transparent border-accent/20 hover:bg-accent/10 hover:border-accent/30"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
          className="bg-accent/5 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h4 className="font-semibold mb-2">What's included in project-based pricing?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Complete development, testing, documentation, deployment assistance, and 30 days of support.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Do you offer payment plans?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Yes, we offer milestone-based payments for larger projects to help manage cash flow.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
