import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact - techgaint monster",
  description: "Get in touch with our development team. We respond within 24 hours with detailed project proposals.",
  keywords: ["contact", "freelance developer", "project quote", "web development services"],
  openGraph: {
    title: "Contact - techgaint monster",
    description: "Get in touch with our development team. We respond within 24 hours.",
    url: "https://techgaintmonster.dev/contact",
    siteName: "techgaint monster",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact techgaint monster",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - techgaint monster",
    description: "Get in touch with our development team. We respond within 24 hours.",
    images: ["/og-contact.jpg"],
  },
}

export default function ContactPage() {
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
        <ContactForm />
        <Footer />
      </main>
    </>
  )
}
