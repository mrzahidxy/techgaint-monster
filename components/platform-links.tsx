"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function PlatformLinks() {
  return (
    <div className="space-y-4">
      <h4 className="font-semibold text-lg">Connect With Us</h4>
      <div className="flex flex-col gap-3">
        <Button variant="outline" asChild className="justify-start bg-transparent">
          <a href="https://upwork.com" target="_blank" rel="noopener noreferrer">
            <div className="w-8 h-8 bg-green-600 rounded-md flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">U</span>
            </div>
            Upwork Profile
            <ExternalLink className="ml-auto w-4 h-4" />
          </a>
        </Button>
        <Button variant="outline" asChild className="justify-start bg-transparent">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">in</span>
            </div>
            LinkedIn Profile
            <ExternalLink className="ml-auto w-4 h-4" />
          </a>
        </Button>
      </div>
    </div>
  )
}
