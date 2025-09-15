"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileText } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { KpiChip } from "./kpi-chip"

interface Project {
  id: string
  title: string
  category: string
  logo: string
  outcome: string
  kpis: string[]
  technologies: string[]
  image: string
  video?: string | null
  links: {
    caseStudy: string
    live: string
  }
}

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group"
    >
      <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-200">
        <CardContent className="p-0">
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-200"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          <div className="p-4">
            <h3 className="text-lg font-semibold text-balance mb-2">{project.title}</h3>

            <p className="text-sm text-muted-foreground mb-3 leading-relaxed line-clamp-2">{project.outcome}</p>

            <div className="flex flex-wrap gap-1 mb-3">
              {project.kpis.slice(0, 2).map((kpi) => (
                <KpiChip key={kpi} value={kpi} />
              ))}
            </div>

            <div className="flex flex-wrap gap-1 mb-4">
              {project.technologies.slice(0, 3).map((tech) => (
                <span key={tech} className="px-2 py-1 text-xs bg-muted text-foreground rounded-md">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              <Button asChild className="flex-1" size="sm">
                <Link href={project.links.caseStudy}>
                  <FileText className="w-4 h-4 mr-2" />
                  Case Study
                </Link>
              </Button>
              <Button variant="outline" asChild className="flex-1 bg-transparent" size="sm">
                <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
