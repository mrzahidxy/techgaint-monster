import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Calendar, User, Code } from "lucide-react"
import { CaseStudyLayout } from "@/components/case-study-layout"
import { Gallery } from "@/components/gallery"
import { MetricTable } from "@/components/metric-table"
import { CTASection } from "@/components/cta-section"

const caseStudies = {
  "ecommerce-platform": {
    title: "E-Commerce Platform",
    subtitle: "Scaling to 10k+ daily users with 300% conversion increase",
    category: "Web",
    role: "Full-Stack Development",
    date: "2024",
    stack: ["Next.js 14", "PostgreSQL", "Stripe", "Redis", "Vercel"],
    heroImage: "/placeholder.svg?height=600&width=1200",
    client: "TechRetail Co.",
    duration: "3 months",
    problem: {
      title: "The Challenge",
      content:
        "TechRetail Co. was struggling with their legacy e-commerce platform that couldn't handle their growing traffic of 10k+ daily visitors. The site had slow load times (5+ seconds), a 15% conversion rate, and frequent crashes during peak hours. They needed a modern, scalable solution that could grow with their business.",
      metrics: [
        "5+ second load times",
        "15% conversion rate",
        "Daily crashes during peak hours",
        "Limited mobile experience",
      ],
    },
    approach: {
      title: "Our Approach",
      content:
        "We rebuilt their entire platform using Next.js 14 with App Router for optimal performance, PostgreSQL for reliable data management, and Redis for intelligent caching. The new architecture included AI-powered product recommendations, streamlined checkout flow, and comprehensive mobile optimization.",
      features: [
        "Server-side rendering for SEO",
        "AI product recommendations",
        "One-click checkout with Stripe",
        "Real-time inventory management",
        "Progressive Web App features",
      ],
    },
    outcome: {
      title: "The Results",
      content:
        "The new platform exceeded all expectations, delivering significant improvements across all key metrics. The combination of modern architecture and user-centered design resulted in measurable business impact within the first month of launch.",
      metrics: {
        "Conversion Rate": { before: "15%", after: "45%", change: "+300%" },
        "Page Load Time": { before: "5.2s", after: "1.1s", change: "-79%" },
        "Mobile Traffic": { before: "35%", after: "65%", change: "+86%" },
        Revenue: { before: "$50k/mo", after: "$150k/mo", change: "+200%" },
      },
    },
    screenshots: [
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Modern homepage with AI-powered product recommendations",
      },
      { url: "/placeholder.svg?height=400&width=600", caption: "Streamlined checkout process with one-click payments" },
      { url: "/placeholder.svg?height=400&width=600", caption: "Mobile-optimized product pages with instant search" },
      { url: "/placeholder.svg?height=400&width=600", caption: "Real-time admin dashboard for inventory management" },
      { url: "/placeholder.svg?height=400&width=600", caption: "Customer account portal with order tracking" },
    ],
    liveUrl: "https://example.com",
    testimonial: {
      quote:
        "The new platform transformed our business. We've seen unprecedented growth and our customers love the experience.",
      author: "Sarah Johnson",
      role: "CEO, TechRetail Co.",
    },
  },
  "ai-content-generator": {
    title: "AI Content Generator",
    subtitle: "90% time savings with AI-powered brand-consistent content",
    category: "AI",
    role: "AI Development",
    date: "2024",
    stack: ["React", "Node.js", "OpenAI GPT-4", "LangChain", "MongoDB"],
    heroImage: "/placeholder.svg?height=600&width=1200",
    client: "ContentCorp",
    duration: "2 months",
    problem: {
      title: "The Challenge",
      content:
        "ContentCorp's marketing team was spending 20+ hours weekly creating content manually, struggling with brand consistency and scalability. They needed an AI solution that could maintain their unique brand voice while dramatically increasing content output.",
      metrics: [
        "20+ hours weekly on content",
        "Inconsistent brand voice",
        "Limited content variety",
        "High content creation costs",
      ],
    },
    approach: {
      title: "Our Approach",
      content:
        "We developed a custom AI content generation platform using GPT-4 with fine-tuned brand voice training. The system includes automated workflows, content approval processes, and multi-format output capabilities for various marketing channels.",
      features: [
        "Custom GPT-4 fine-tuning",
        "Brand voice consistency",
        "Multi-format content generation",
        "Automated approval workflows",
        "Content performance analytics",
      ],
    },
    outcome: {
      title: "The Results",
      content:
        "The AI platform revolutionized ContentCorp's content creation process, enabling them to scale their marketing efforts while maintaining quality and brand consistency across all channels.",
      metrics: {
        "Content Creation Time": { before: "20 hrs/week", after: "2 hrs/week", change: "-90%" },
        "Content Output": { before: "5 pieces/week", after: "50 pieces/week", change: "+900%" },
        "Brand Consistency Score": { before: "65%", after: "98%", change: "+51%" },
        "Content Approval Rate": { before: "70%", after: "95%", change: "+36%" },
      },
    },
    screenshots: [
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "AI content generation interface with brand voice settings",
      },
      { url: "/placeholder.svg?height=400&width=600", caption: "Multi-format content output for different channels" },
      { url: "/placeholder.svg?height=400&width=600", caption: "Content approval workflow with team collaboration" },
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Performance analytics dashboard for content optimization",
      },
    ],
    liveUrl: "https://example.com",
    testimonial: {
      quote:
        "This AI tool has been a game-changer for our content strategy. We're producing 10x more content with better consistency.",
      author: "Mike Chen",
      role: "Marketing Director, ContentCorp",
    },
  },
  "wordpress-site": {
    title: "Custom WordPress Site",
    subtitle: "High-performance WordPress with custom blocks and 95+ PageSpeed",
    category: "WordPress",
    role: "WordPress Development",
    date: "2024",
    stack: ["WordPress", "PHP", "ACF", "Gutenberg", "WP Rocket"],
    heroImage: "/placeholder.svg?height=600&width=1200",
    client: "Creative Agency",
    duration: "2 months",
    problem: {
      title: "The Challenge",
      content:
        "Creative Agency needed a custom WordPress solution with advanced functionality and optimal performance. Their existing site was slow, difficult to manage, and lacked the custom features they needed for their content strategy.",
      metrics: [
        "Poor PageSpeed scores (45/100)",
        "Difficult content management",
        "Limited design flexibility",
        "No custom functionality",
      ],
    },
    approach: {
      title: "Our Approach",
      content:
        "We built a custom WordPress theme with Gutenberg blocks, optimized for Core Web Vitals, and integrated advanced custom fields. The solution included custom post types, automated workflows, and comprehensive performance optimization.",
      features: [
        "Custom Gutenberg blocks",
        "Advanced Custom Fields integration",
        "Core Web Vitals optimization",
        "Custom post types and taxonomies",
        "Automated content workflows",
      ],
    },
    outcome: {
      title: "The Results",
      content:
        "The new WordPress site delivered exceptional performance and functionality, enabling the client to manage their content efficiently while maintaining optimal user experience and search engine visibility.",
      metrics: {
        "PageSpeed Score": { before: "45", after: "95+", change: "+111%" },
        "Load Time": { before: "4.2s", after: "1.2s", change: "-71%" },
        "Custom Blocks": { before: "0", after: "12", change: "+12" },
        "SEO Score": { before: "65/100", after: "100/100", change: "+54%" },
      },
    },
    screenshots: [
      {
        url: "/placeholder.svg?height=400&width=600",
        caption: "Homepage built with custom Gutenberg blocks",
      },
      { url: "/placeholder.svg?height=400&width=600", caption: "Custom block editor with advanced functionality" },
      { url: "/placeholder.svg?height=400&width=600", caption: "Performance optimization dashboard" },
      { url: "/placeholder.svg?height=400&width=600", caption: "Custom post types and content management" },
    ],
    liveUrl: "https://example.com",
    testimonial: {
      quote:
        "The custom WordPress solution exceeded our expectations. Managing content is now effortless and our site performs beautifully.",
      author: "David Miller",
      role: "Creative Director, Creative Agency",
    },
  },
}

interface PageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const caseStudy = caseStudies[params.slug as keyof typeof caseStudies]

  if (!caseStudy) {
    return {
      title: "Case Study Not Found - The 3developers",
    }
  }

  return {
    title: `${caseStudy.title} Case Study - The 3developers`,
    description: caseStudy.subtitle,
    keywords: [caseStudy.category.toLowerCase(), "case study", "web development", "project results"],
    openGraph: {
      title: `${caseStudy.title} Case Study`,
      description: caseStudy.subtitle,
      url: `https://techgaintmonster.dev/case-studies/${params.slug}`,
      siteName: "The 3developers",
      images: [
        {
          url: caseStudy.heroImage,
          width: 1200,
          height: 630,
          alt: `${caseStudy.title} Case Study`,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${caseStudy.title} Case Study`,
      description: caseStudy.subtitle,
      images: [caseStudy.heroImage],
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({
    slug,
  }))
}

export default function CaseStudyPage({ params }: PageProps) {
  const caseStudy = caseStudies[params.slug as keyof typeof caseStudies]

  if (!caseStudy) {
    notFound()
  }

  return (
    <CaseStudyLayout>
      {/* Navigation */}
      <div className="container mx-auto px-4 py-6">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/#portfolio">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent">
              {caseStudy.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4">{caseStudy.title}</h1>
            <p className="text-xl text-muted-foreground text-pretty mb-8">{caseStudy.subtitle}</p>

            {/* Project Facts */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-accent" />
                <div>
                  <div className="text-sm text-muted-foreground">Role</div>
                  <div className="font-medium">{caseStudy.role}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-accent" />
                <div>
                  <div className="text-sm text-muted-foreground">Date</div>
                  <div className="font-medium">{caseStudy.date}</div>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Code className="w-5 h-5 text-accent" />
                <span className="font-medium">Tech Stack</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {caseStudy.stack.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <Button asChild size="lg">
              <a href={caseStudy.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live Project
              </a>
            </Button>
          </div>

          <div className="relative">
            <Image
              src={caseStudy.heroImage || "/placeholder.svg"}
              alt={caseStudy.title}
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Problem → Approach → Outcome Blocks */}
      <section className="container mx-auto px-4 mb-16">
        <div className="space-y-16">
          {/* Problem */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <h2 className="text-2xl font-bold text-red-600">{caseStudy.problem.title}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">{caseStudy.problem.content}</p>
              <ul className="space-y-2">
                {caseStudy.problem.metrics.map((metric, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    {metric}
                  </li>
                ))}
              </ul>
            </div>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Project Overview</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Client:</span>
                    <span className="font-medium">{caseStudy.client}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">{caseStudy.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Category:</span>
                    <span className="font-medium">{caseStudy.category}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Approach */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <h2 className="text-2xl font-bold text-blue-600">{caseStudy.approach.title}</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-4xl">{caseStudy.approach.content}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {caseStudy.approach.features.map((feature, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Outcome */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <h2 className="text-2xl font-bold text-green-600">{caseStudy.outcome.title}</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-4xl">{caseStudy.outcome.content}</p>
            <MetricTable metrics={caseStudy.outcome.metrics} />
          </div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Project Screenshots</h2>
        <Gallery screenshots={caseStudy.screenshots} />
      </section>

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <section className="container mx-auto px-4 mb-16">
          <Card className="bg-accent/5 border-accent/20">
            <CardContent className="p-8 text-center">
              <blockquote className="text-xl font-medium text-balance mb-6">"{caseStudy.testimonial.quote}"</blockquote>
              <div>
                <div className="font-semibold">{caseStudy.testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{caseStudy.testimonial.role}</div>
              </div>
            </CardContent>
          </Card>
        </section>
      )}

      {/* CTA Section */}
      <CTASection />
    </CaseStudyLayout>
  )
}
