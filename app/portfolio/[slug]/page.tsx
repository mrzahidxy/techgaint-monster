import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import siteData from "@/content/site.json"

interface CaseStudyPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return siteData.projects.map((project) => ({
    slug: project.id,
  }))
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const project = siteData.projects.find((p) => p.id === params.slug)

  if (!project) {
    return {
      title: "Case Study Not Found",
    }
  }

  return {
    title: `${project.title} Case Study - techgaint monster`,
    description: project.outcome,
    openGraph: {
      title: `${project.title} Case Study - techgaint monster`,
      description: project.outcome,
      images: [project.image],
    },
  }
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const project = siteData.projects.find((p) => p.id === params.slug)

  if (!project) {
    notFound()
  }

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <Link href="/portfolio">
              <Button variant="outline" size="sm" className="bg-transparent">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Button>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src={project.logo || "/placeholder.svg"}
                alt={`${project.title} logo`}
                width={48}
                height={48}
                className="rounded-lg"
              />
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
                <Badge variant="secondary" className="mt-1">
                  {project.category}
                </Badge>
              </div>
            </div>

            <p className="text-xl text-muted-foreground mb-8">{project.outcome}</p>

            <div className="flex flex-wrap gap-3 mb-8">
              {project.kpis.map((kpi) => (
                <Badge key={kpi} className="bg-accent/10 text-accent hover:bg-accent/20">
                  {kpi}
                </Badge>
              ))}
            </div>

            <div className="flex gap-4 mb-12">
              <Button asChild className="bg-accent hover:bg-accent/90">
                <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live Project
                </a>
              </Button>
              <Link href="/#contact">
                <Button variant="outline" className="bg-transparent">
                  Start Similar Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Problem */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    Problem
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
                </div>

                {/* Approach */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    Approach
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{project.approach}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="bg-muted/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Outcome */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    Outcome
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">{project.outcome}</p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Key Metrics */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Key Results
                    </h3>
                    <div className="space-y-4">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">{key}</span>
                          <span className="font-semibold text-accent">{value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Project Details */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Project Details</h3>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm text-muted-foreground block">Category</span>
                        <span className="font-medium">{project.category}</span>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground block">Technologies</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bar */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Achieve Similar Results?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you build a solution that drives measurable business impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  Start Your Project
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" size="lg" className="bg-transparent">
                  View More Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
