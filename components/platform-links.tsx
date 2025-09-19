"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import siteData from "@/content/site.json";

export default function PlatformLinks() {
  console.log("  siteData.contact?.platforms", siteData.contact?.platforms);
  return (
    <div className="space-y-4">
      <h4 className="font-semibold text-lg">Connect With Us</h4>
      <div className="flex flex-col gap-3">
        {siteData.contact?.platforms.map((platform) => (
          <Button
            variant="outline"
            asChild
            className="justify-start bg-transparent"
            key={platform.name}
          >
            <a href={platform.url} target="_blank" rel="noopener noreferrer">
              <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">
                  {platform.icon}
                </span>
              </div>
              {platform.name}
              <ExternalLink className="ml-auto w-4 h-4" />
            </a>
          </Button>
        ))}
      </div>
    </div>
  );
}
