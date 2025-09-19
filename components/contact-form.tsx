"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Calendar, Send, CheckCircle, Clock, Star, Award, Users } from "lucide-react"
import { motion } from "framer-motion"
import PlatformLinks from "./platform-links"
import siteData from "@/content/site.json"

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Mail className="w-4 h-4" />
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-6">
            Let&apos;s Build Something <span className="text-accent">Amazing Together</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Get in touch and Let&apos;s discuss your project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">{siteData.contact.email}</p>
                    <p className="text-sm text-muted-foreground">We&apos;ll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Calendar className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Schedule a Call</h4>
                    <p className="text-muted-foreground">Book a free consultation</p>
                    <Button variant="link" className="p-0 h-auto text-accent hover:text-accent/80" asChild>
                      <a href={siteData.contact.calendar} target="_blank" rel="noopener noreferrer">
                        calendly.com/ismailhossen
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <PlatformLinks />

            <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-xl p-6 border border-accent/10">
              <h4 className="font-semibold mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-accent" />
                Why Choose Us?
              </h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium">Response Time</span>
                  </div>
                  <span className="text-sm font-bold text-accent">{"< 24 hours"}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium">Project Success Rate</span>
                  </div>
                  <span className="text-sm font-bold text-accent">100%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium">Client Satisfaction</span>
                  </div>
                  <span className="text-sm font-bold text-accent">5/5 â­</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium">Years Experience</span>
                  </div>
                  <span className="text-sm font-bold text-accent">15+</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="border-0 shadow-sm bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Contact</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  Fill out the form below and We&apos;ll get back to you within 24 hours with a detailed proposal.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-sm font-medium">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          required
                          className="border-accent/20 focus:border-accent/40 transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-sm font-medium">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          required
                          className="border-accent/20 focus:border-accent/40 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="border-accent/20 focus:border-accent/40 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="projectType" className="text-sm font-medium">
                        Project Type *
                      </Label>
                      <Select required>
                        <SelectTrigger className="border-accent/20 focus:border-accent/40 transition-colors">
                          <SelectValue placeholder="What type of project do you need?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="web-app">Web Application</SelectItem>
                          <SelectItem value="mobile-app">Mobile Application</SelectItem>
                          <SelectItem value="wordpress">WordPress Development</SelectItem>
                          <SelectItem value="ai-automation">AI & Automation</SelectItem>
                          <SelectItem value="api-backend">API & Backend</SelectItem>
                          <SelectItem value="consultation">Consultation</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">
                        Project Description *
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        className="min-h-[120px] border-accent/20 focus:border-accent/40 transition-colors resize-none"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-accent hover:bg-accent/90 shadow-sm hover:shadow-md transition-all duration-200"
                      size="lg"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4 shadow-sm">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed max-w-md mx-auto">
                      Thank you for reaching out. We&apos;ll review your project details and get back to you within 24 hours
                      with a detailed proposal.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="border-accent/20 hover:bg-accent/10 hover:border-accent/30"
                    >
                      Send Another Message
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

