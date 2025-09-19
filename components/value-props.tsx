"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Zap, Code, Rocket, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

const valueProps = [
  {
    icon: Code,
    title: "Clean, Maintainable Code",
    description:
      "We write code that&apos;s not just functional, but also readable, testable, and easy to maintain for long-term success.",
    features: ["Best Practices", "Code Reviews", "Documentation", "Testing"],
  },
  {
    icon: Rocket,
    title: "Scalable Architecture",
    description:
      "Our solutions are built to grow with your business, handling increased traffic and complexity seamlessly.",
    features: ["Microservices", "Cloud-Ready", "Performance Optimized", "Auto-Scaling"],
  },
  {
    icon: Shield,
    title: "Secure Data Handling",
    description:
      "Security is paramount. We implement industry-standard security practices to protect your data and users.",
    features: ["Encryption", "Authentication", "GDPR Compliant", "Regular Audits"],
  },
  {
    icon: CheckCircle,
    title: "Production-Ready Delivery",
    description: "Every project is delivered ready for production with proper deployment, monitoring, and maintenance.",
    features: ["CI/CD Pipeline", "Monitoring", "Error Tracking", "Performance Analytics"],
  },
]

const stats = [
  { number: "24h", label: "Average Response Time" },
  { number: "90%", label: "Uptime Guarantee" },
  { number: "20+", label: "Technologies Mastered" },
  { number: "4.5â˜…", label: "Client Rating" },
]

export default function ValueProps() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-6">
            Built for <span className="text-accent">Performance</span> and{" "}
            <span className="text-accent">Reliability</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            We don&apos;t just build applicationsâ€”we craft solutions that stand the test of time, scale with your growth, and
            deliver exceptional user experiences.
          </p>
        </motion.div>

        {/* Value Propositions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group border-0 shadow-sm bg-card/50 backdrop-blur-sm hover:bg-card/80">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm">
                      <prop.icon className="w-7 h-7 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 leading-tight">{prop.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{prop.description}</p>
                      <div className="grid grid-cols-2 gap-3">
                        {prop.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-sm">
                            <div className="w-4 h-4 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                              <CheckCircle className="w-3 h-3 text-accent" />
                            </div>
                            <span className="text-foreground/80 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-accent/5 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Trusted by Businesses Worldwide</h3>
            <p className="text-muted-foreground">Our commitment to excellence is reflected in our track record</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

