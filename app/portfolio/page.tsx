import type { Metadata } from "next"
import PortfolioClientPage from "./PortfolioClientPage"

export const metadata: Metadata = {
  title: "Portfolio - The 3developers",
  description: "Explore our portfolio of successful web, mobile, and AI projects with measurable business impact.",
  openGraph: {
    title: "Portfolio - The 3developers",
    description: "Explore our portfolio of successful web, mobile, and AI projects with measurable business impact.",
  },
}

export default function PortfolioPage() {
  return <PortfolioClientPage />
}
