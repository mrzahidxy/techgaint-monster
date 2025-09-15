import type React from "react"
import Navigation from "./navigation"
import Footer from "./footer"

interface CaseStudyLayoutProps {
  children: React.ReactNode
}

export function CaseStudyLayout({ children }: CaseStudyLayoutProps) {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">{children}</main>
      <Footer />
    </>
  )
}
