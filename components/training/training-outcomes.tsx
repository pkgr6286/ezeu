import { TrendingUp, Users, DollarSign } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const outcomes = [
  {
    icon: Users,
    title: "Increased Employee Retention",
    description: "Boost morale and loyalty by investing in your team's professional growth.",
  },
  {
    icon: TrendingUp,
    title: "Enhanced Productivity",
    description: "Equip your workforce with new skills and knowledge to improve efficiency and output.",
  },
  {
    icon: DollarSign,
    title: "Improved Return on Investment (ROI)",
    description: "See tangible benefits from your training initiatives through better performance and innovation.",
  },
]

export default function TrainingOutcomes() {
  return (
    <section className="py-12 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-ezeu-dark dark:text-white">
          Measurable Training Outcomes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {outcomes.map((outcome, index) => (
            <Card
              key={index}
              className="flex flex-col items-center p-6 text-center shadow-md bg-white dark:bg-gray-800"
            >
              <CardContent className="flex flex-col items-center justify-center p-0">
                <outcome.icon className="h-12 w-12 text-ezeu-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-ezeu-dark dark:text-white">{outcome.title}</h3>
                <p className="text-muted-foreground dark:text-ezeu-text-light">{outcome.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
