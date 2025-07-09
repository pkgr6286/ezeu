import { Building, Users, Handshake } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const processSteps = [
  {
    icon: Building,
    title: "Build Phase",
    description:
      "EZEU establishes the necessary infrastructure, recruits and trains the dedicated team, and sets up all operational processes according to your specifications.",
  },
  {
    icon: Users,
    title: "Operate Phase",
    description:
      "We manage the day-to-day operations, ensuring the team is productive, meets performance targets, and adheres to quality standards. You maintain full oversight and control.",
  },
  {
    icon: Handshake,
    title: "Transfer Phase",
    description:
      "Once the operation is stable and mature, EZEU facilitates a smooth and complete transfer of the entire entity, including assets and personnel, to your direct ownership.",
  },
]

export default function BotProcess() {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-ezeu-dark">Our BOT Process Steps</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {processSteps.map((step, index) => (
            <Card key={index} className="flex flex-col items-center p-6 text-center shadow-md">
              <CardContent className="flex flex-col items-center justify-center p-0">
                <step.icon className="h-16 w-16 text-ezeu-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-ezeu-dark">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
