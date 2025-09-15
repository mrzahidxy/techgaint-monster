"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, ExternalLink } from "lucide-react";
import Link from "next/link";
import siteData from "@/content/site.json";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden text-white"
    >
      {/* Background: deep slate with very soft color glows and a faint grid */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(1000px at 50% -10%, rgba(59,130,246,0.10), transparent 60%), radial-gradient(700px at 10% 30%, rgba(56,189,248,0.08), transparent 55%), radial-gradient(900px at 90% 70%, rgba(99,102,241,0.08), transparent 60%)"
        }}
      />
      <div className="absolute inset-0 -z-10 opacity-[0.06] mix-blend-overlay bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/15 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Team up with {siteData.brand.name}
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 leading-tight">
            Scalable web, mobile, and{" "}
            <span className="text-accent">AI solutions</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/70 text-pretty mb-8 max-w-3xl mx-auto">
            Full-stack development with React/Next.js, Node/Django, and AI
            automation. We deliver production-ready solutions that scale with
            your business.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg font-semibold group"
            >
              Contact
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="flex gap-3">
              <Link href="/portfolio">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-6 py-3 text-lg font-semibold group bg-transparent border-white/20 text-white"
                >
                  <Code className="mr-2 w-5 h-5" />
                  View Work
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="px-6 py-3 text-lg font-semibold bg-transparent border-white/20 text-white"
              >
                <a
                  href={siteData.contact.platforms[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Upwork
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="px-6 py-3 text-lg font-semibold bg-transparent border-white/20 text-white"
              >
                <a
                  href={siteData.contact.platforms[1].url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">10+</div>
              <div className="text-white/70">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">3</div>
              <div className="text-white/70">Expert Developers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">99%</div>
              <div className="text-white/70">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
