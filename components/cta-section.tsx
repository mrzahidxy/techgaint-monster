import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function CTASection() {
  return (
    <section className="container mx-auto px-4 mb-16">
      <Card className="bg-accent/5 border-accent/20">
        <CardContent className="p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Start Your Project</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to achieve similar results? Let's discuss how we can help transform your ideas into successful digital
            solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Get Started Today
            </Button>
            <Button variant="outline" size="lg">
              View More Case Studies
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
