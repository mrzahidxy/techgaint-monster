import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Portfolio from "@/components/portfolio"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Projects - The 3developers",
  description:
    "Explore our portfolio of successful web, mobile, and AI projects. Over 50 projects delivered with measurable business impact.",
  keywords: ["portfolio", "projects", "web development", "AI solutions", "case studies"],
  openGraph: {
    title: "Projects - The 3developers",
    description: "Explore our portfolio of successful web, mobile, and AI projects.",
    url: "https://techgaintmonster.dev/projects",
    siteName: "The 3developers",
    images: [
      {
        url: "/og-projects.jpg",
        width: 1200,
        height: 630,
        alt: "The 3developers Projects Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects - The 3developers",
    description: "Explore our portfolio of successful web, mobile, and AI projects.",
    images: ["/og-projects.jpg"],
  },
}

export default function ProjectsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        <div className="container mx-auto px-4 py-8">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
        <Portfolio />
        <Footer />
      </main>
    </>
  )
}
