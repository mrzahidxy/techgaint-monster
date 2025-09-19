"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Briefcase } from "lucide-react"
import { motion } from "framer-motion"
import { ProjectCard } from "./project-card"
import { FilterPills } from "./filter-pills"
import siteData from "@/content/site.json"

const categories = ["All", "Web", "AI", "WordPress"]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProjects = siteData?.projects?.slice(0, 6).filter((project) => activeFilter === "All" || project.category === activeFilter)

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
