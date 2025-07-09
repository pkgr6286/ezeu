import { Bug, Lock, Scale, Settings, PenToolIcon as Tool, Timer } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const challenges = [
  {
    icon: Settings,
    title: "Lack of Standardization",
  },
  {
    icon: Bug,
    title: "Delayed Bug Detection",
  },
  {
    icon: Tool,
    title: "Fragmented Tooling",
  },
  {
    icon: Timer,
    title: "Manual Processes",
  },
  {
    icon: Lock,
    title: "Security Gaps",
  },
  {
    icon: Scale,
    title: "Scalability Bottlenecks",
  },
]

export default function KeyChallenges() {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-ezeu-dark">
          Key Challenges in Traditional DevOps Setups
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {challenges.map((challenge, index) => (
            <Card key={index} className="flex flex-col items-center p-6 text-center shadow-md">
              <CardContent className="flex flex-col items-center justify-center p-0">
                <challenge.icon className="h-12 w-12 text-ezeu-accent mb-4" />
                <h3 className="text-xl font-semibold text-ezeu-dark">{challenge.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
