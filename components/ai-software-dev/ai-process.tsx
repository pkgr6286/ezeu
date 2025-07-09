import { Search, Palette, Code, Bug, LifeBuoy } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const processStages = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "In-depth analysis of your business needs, goals, and technical requirements to define project scope and strategy.",
  },
  {
    icon: Palette,
    title: "Design",
    description:
      "Crafting intuitive user interfaces (UI) and user experiences (UX), along with robust system architecture and technical specifications.",
  },
  {
    icon: Code,
    title: "Development",
    description:
      "Agile development sprints, clean code practices, and continuous integration to build your AI-powered software.",
  },
  {
    icon: Bug,
    title: "Quality Assurance (QA)",
    description:
      "Rigorous testing, including functional, performance, security, and user acceptance testing, to ensure flawless operation.",
  },
  {
    icon: LifeBuoy,
    title: "Support & Maintenance",
    description:
      "Ongoing support, monitoring, updates, and enhancements to ensure your software remains optimal and secure.",
  },
]

export default function AiProcess() {
  return (
    <section className="py-12 md:py-24 bg-ezeu-dark text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Software Development Process</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {processStages.map((stage, index) => (
            <Card
              key={index}
              className="flex flex-col items-center p-6 text-center bg-white text-ezeu-dark rounded-lg shadow-lg"
            >
              <CardContent className="flex flex-col items-center justify-center p-0">
                <stage.icon className="h-12 w-12 text-ezeu-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">{stage.title}</h3>
                <p className="text-gray-700">{stage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
