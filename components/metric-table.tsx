import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"

interface Metric {
  before: string
  after: string
  change: string
}

interface MetricTableProps {
  metrics: Record<string, Metric>
}

export function MetricTable({ metrics }: MetricTableProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {Object.entries(metrics).map(([key, metric]) => (
        <Card key={key}>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4">{key}</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Before:</span>
                <span className="font-mono">{metric.before}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">After:</span>
                <span className="font-mono font-semibold">{metric.after}</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t">
                <span className="text-sm font-medium">Change:</span>
                <div className="flex items-center gap-1">
                  {metric.change.startsWith("+") ? (
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-green-600" />
                  )}
                  <span className="font-mono font-bold text-green-600">{metric.change}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
