import { Headset, BookOpen, Bot, Search, ShieldCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const useCases = [
  {
    icon: Headset,
    title: "Enhanced Customer Support",
    description:
      "Power chatbots and virtual assistants with access to your latest product manuals, FAQs, and support tickets for accurate, real-time answers.",
  },
  {
    icon: BookOpen,
    title: "Intelligent Knowledge Base",
    description:
      "Transform internal documentation into an interactive knowledge hub, allowing employees to quickly find precise information from vast datasets.",
  },
  {
    icon: Bot,
    title: "Advanced Intelligent Agents",
    description:
      "Develop AI agents that can perform complex tasks by retrieving and synthesizing information from multiple sources, improving decision-making.",
  },
  {
    icon: Search,
    title: "Personalized Content Generation",
    description:
      "Generate highly personalized marketing content, reports, or summaries by pulling specific data points relevant to individual user profiles or queries.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Legal Research",
    description:
      "Enable legal and compliance teams to quickly search and analyze vast legal documents, regulations, and case precedents for precise insights.",
  },
]

export default function RagUseCases() {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-ezeu-dark">Key Use Cases for RAG AI</h2>
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
