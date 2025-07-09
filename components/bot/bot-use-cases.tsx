import { Code, Globe, Factory, Users, DollarSign } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const useCases = [
  {
    icon: Code,
    title: "Software Development Centers",
    description: "Establishing dedicated offshore teams for software, web, or mobile app development.",
  },
  {
    icon: Users,
    title: "IT Support & Helpdesk",
    description: "Setting up and operating 24/7 IT support or customer service centers.",
  },
  {
    icon: DollarSign,
    title: "Back-Office Operations",
    description: "Outsourcing and transitioning finance, HR, or administrative functions.",
  },
  {
    icon: Factory,
    title: "R&D and Innovation Hubs",
    description: "Creating dedicated research and development units for new technologies.",
  },
  {
    icon: Globe,
    title: "Market Expansion",
    description: "Entering new international markets with a local operational presence.",
  },
]

export default function BotUseCases() {
  return (
    <section className="py-12 md:py-24 bg-ezeu-light-gray">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-ezeu-dark">Use Cases & Industries Served</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <Card key={index} className="flex flex-col items-center p-6 text-center shadow-md">
              <CardContent className="flex flex-col items-center justify-center p-0">
                <useCase.icon className="h-12 w-12 text-ezeu-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-ezeu-dark">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
