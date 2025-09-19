"use client"

import { Briefcase, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { FilterPills } from "@/components/filter-pills"
import siteData from "@/content/site.json"

const categories = ["All", "Web", "AI", "WordPress"]

export default function PortfolioClientPage() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-24 pb-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <Link href="/">
              <Button variant="outline" size="sm" className="bg-transparent">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4" />
              Our Portfolio
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6">
              Projects That <span className="text-accent">Drive Results</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Over 50 successful projects delivered with measurable business impact across web development, AI
              automation, and mobile applications.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <FilterPills categories={categories} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {siteData.projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-accent/5 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss how we can help transform your ideas into successful digital solutions with measurable
                results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#contact">
                  <Button size="lg" className="bg-accent hover:bg-accent/90">
                    Start Your Project
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="outline" size="lg" className="bg-transparent">
                    View All Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

