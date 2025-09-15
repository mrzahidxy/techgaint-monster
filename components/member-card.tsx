"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

interface MemberCardProps {
  member: {
    name: string
    role: string
    bio: string
    image: string
    skills: string[]
    social: {
      github: string
      linkedin: string
      email: string
    }
  }
  index: number
}

export default function MemberCard({ member, index }: MemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <Card className="h-full hover:shadow-xl transition-all duration-300 group overflow-hidden">
        <CardContent className="p-0">
          {/* Image Section */}
          <div className="relative overflow-hidden">
            <Image
              src={member.image || "/placeholder.svg"}
              alt={`${member.name} - ${member.role}`}
              width={300}
              height={300}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Content Section */}
          <div className="p-6">
            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
            <p className="text-accent font-medium mb-3">{member.role}</p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.bio}</p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {member.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs bg-accent/10 text-accent hover:bg-accent/20">
                  {skill}
                </Badge>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="flex-1 group/btn bg-transparent" asChild>
                <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="sm" className="flex-1 group/btn bg-transparent" asChild>
                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="sm" className="group/btn bg-transparent" asChild>
                <a href={`mailto:${member.social.email}`}>
                  <Mail className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
