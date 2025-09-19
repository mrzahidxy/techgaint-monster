import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Services from "@/components/services"
import ValueProps from "@/components/value-props"
import TeamGrid from "@/components/team-grid"
import Portfolio from "@/components/portfolio"
import Pricing from "@/components/pricing"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "The 3developers - Full-Stack Development & AI Solutions",
  description:
    "Professional freelancing team led by Ismail Hossen. Scalable web, mobile, and AI solutions with React/Next.js, Node/Django, and AI automation.",
  keywords: [
    "full-stack development",
    "AI automation",
    "React",
    "Next.js",
    "Node.js",
    "Django",
    "WordPress development",
    "freelance developer",
  ],
  authors: [{ name: "Ismail Hossen" }],
  creator: "Ismail Hossen",
  publisher: "The 3developers",
  openGraph: {
    title: "The 3developers - Full-Stack Development & AI Solutions",
    description: "Professional freelancing team offering scalable web, mobile, and AI solutions.",
    url: "https://techgaintmonster.dev",
    siteName: "The 3developers",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The 3developers Development Team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The 3developers - Full-Stack Development & AI Solutions",
    description: "Professional freelancing team offering scalable web, mobile, and AI solutions.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <Services />
        <ValueProps />
        <TeamGrid />
        <Portfolio />
        <Pricing />
        <ContactForm />
        <Footer />
      </main>
    </>
  )
}
