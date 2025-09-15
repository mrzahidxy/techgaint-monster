"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Briefcase } from "lucide-react"
import { motion } from "framer-motion"
import { ProjectCard } from "./project-card"
import { FilterPills } from "./filter-pills"

const projects = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    category: "Web",
    logo: "/placeholder.svg?height=40&width=40",
    outcome: "Increased conversion rates by 300% with sub-second page loads",
    kpis: ["+300% conversion", "50% faster TTFB"],
    technologies: ["Next.js", "PostgreSQL", "Stripe"],
    image: "/placeholder.svg?height=270&width=480",
    video: null,
    links: {
      caseStudy: "/case-studies/ecommerce-platform",
      live: "https://example.com",
    },
    problem: "Client needed a scalable e-commerce solution to handle 10k+ daily visitors with fast checkout",
    approach:
      "Built with Next.js 14, PostgreSQL for data integrity, and Redis for caching. Implemented Stripe for payments and AI-powered product recommendations.",
    metrics: {
      "Conversion Rate": "+300%",
      "Page Load Time": "50% faster",
      "Daily Active Users": "10,000+",
      "Cart Abandonment": "-45%",
    },
  },
  {
    id: "ai-content-generator",
    title: "AI Content Generator",
    category: "AI",
    logo: "/placeholder.svg?height=40&width=40",
    outcome: "Reduced content creation time by 90% while maintaining brand consistency",
    kpis: ["90% time saved", "95% approval rate"],
    technologies: ["React", "OpenAI", "LangChain"],
    image: "/placeholder.svg?height=270&width=480",
    video: null,
    links: {
      caseStudy: "/case-studies/ai-content-generator",
      live: "https://example.com",
    },
    problem: "Marketing team spent 20+ hours weekly creating content manually with inconsistent brand voice",
    approach:
      "Developed AI-powered tool with custom GPT fine-tuning for brand voice, automated workflows, and content approval system.",
    metrics: {
      "Time Savings": "90%",
      "Content Approval Rate": "95%",
      "Content Output": "10x increase",
      "Brand Consistency": "98% score",
    },
  },
  {
    id: "analytics-dashboard",
    title: "Real-Time Analytics",
    category: "Web",
    logo: "/placeholder.svg?height=40&width=40",
    outcome: "Enabled data-driven decisions resulting in 25% revenue increase",
    kpis: ["Sub-second updates", "+25% revenue"],
    technologies: ["React", "D3.js", "WebSocket"],
    image: "/placeholder.svg?height=270&width=480",
    video: null,
    links: {
      caseStudy: "/case-studies/analytics-dashboard",
      live: "https://example.com",
    },
    problem: "Company lacked real-time insights into business performance across multiple channels",
    approach:
      "Built real-time dashboard with WebSocket connections, custom D3.js visualizations, and automated reporting using ClickHouse for fast queries.",
    metrics: {
      "Update Speed": "Sub-second",
      "KPIs Tracked": "25+",
      "Revenue Growth": "+25%",
      "Decision Speed": "5x faster",
    },
  },
  {
    id: "wordpress-site",
    title: "Custom WordPress Site",
    category: "WordPress",
    logo: "/placeholder.svg?height=40&width=40",
    outcome: "Delivered high-performance WordPress site with custom blocks",
    kpis: ["95+ PageSpeed", "Custom blocks"],
    technologies: ["WordPress", "PHP", "ACF"],
    image: "/placeholder.svg?height=270&width=480",
    video: null,
    links: {
      caseStudy: "/case-studies/wordpress-site",
      live: "https://example.com",
    },
    problem: "Client needed a custom WordPress solution with advanced functionality and optimal performance",
    approach:
      "Built custom theme with Gutenberg blocks, optimized for Core Web Vitals, and integrated advanced custom fields.",
    metrics: {
      "PageSpeed Score": "95+",
      "Load Time": "1.2s",
      "Custom Blocks": "12",
      "SEO Score": "100/100",
    },
  },
]

const categories = ["All", "Web", "AI", "WordPress"]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProjects = projects.filter((project) => activeFilter === "All" || project.category === activeFilter)

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Briefcase className="w-4 h-4" />
            Our Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-6">
            Projects That <span className="text-accent">Drive Results</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Over 50 successful projects delivered with measurable business impact
          </p>
        </motion.div>

        <FilterPills categories={categories} activeFilter={activeFilter} onFilterChange={setActiveFilter} />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-accent/5 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Start Your Project</h3>
            <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your ideas into successful digital solutions.
            </p>
            <Button size="lg" onClick={scrollToContact} className="bg-accent hover:bg-accent/90">
              Start your project
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
