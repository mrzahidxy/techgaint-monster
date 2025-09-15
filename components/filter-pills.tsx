"use client"

import { motion } from "framer-motion"

interface FilterPillsProps {
  categories: string[]
  activeFilter: string
  onFilterChange: (filter: string) => void
}

export function FilterPills({ categories, activeFilter, onFilterChange }: FilterPillsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onFilterChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            activeFilter === category
              ? "bg-accent text-accent-foreground"
              : "bg-muted text-foreground hover:bg-accent/10 hover:text-accent"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
        </motion.button>
      ))}
    </div>
  )
}
