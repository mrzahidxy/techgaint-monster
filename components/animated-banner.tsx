"use client"

import { useEffect, useState } from "react"

type AnimatedBannerProps = {
  respectReducedMotion?: boolean
}

export default function AnimatedBanner({ respectReducedMotion = true }: AnimatedBannerProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    if (!respectReducedMotion) return

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)

    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [respectReducedMotion])

  // When respectReducedMotion is false, we always show animations
  // Otherwise, we respect the user's system preference
  if (respectReducedMotion && prefersReducedMotion) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-l from-primary/8 to-accent/8 rounded-full blur-3xl opacity-15" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30" />
      </div>
    )
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]" aria-hidden="true">
      {/* 静态元素 */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-l from-primary/25 to-accent/25 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-2xl" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-[16%] right-1/3 w-2 h-2 bg-accent/40 rounded-full blur-sm" />
      <div className="absolute bottom-[16%] left-[20%] w-3 h-3 bg-primary/30 rounded-full blur-sm" />
    </div>
  )
}