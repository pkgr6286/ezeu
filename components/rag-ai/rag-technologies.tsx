import { Code, Brain, Database, Cloud, MessageSquare } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const technologies = [
  {
    icon: Brain,
    title: "LLM Providers",
    items: ["OpenAI (GPT-4o, GPT-3.5)", "Anthropic (Claude)", "Google (Gemini)", "Custom Fine-tuned Models"],
  },
  {
    icon: Code,
    title: "Frameworks & Libraries",
    items: ["LangChain", "LlamaIndex", "Hugging Face Transformers", "Haystack"],
  },
  {
    icon: Database,
    title: "Vector Databases",
    items: ["Pinecone", "Weaviate", "Chroma", "Qdrant", "Faiss"],
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    items: ["AWS", "Azure", "Google Cloud Platform", "Vercel"],
  },
  {
    icon: MessageSquare,
    title: "Integration & APIs",
    items: ["REST APIs", "GraphQL", "Custom Connectors"],
  },
]

export default function RagTechnologies() {
  return (
    <section className="py-12 md:py-24 bg-ezeu-light-gray">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-ezeu-dark">Supported Technologies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {technologies.map((category, index) => (
            <Card key={index} className="flex flex-col p-6 text-center shadow-md">
              <CardContent className="flex flex-col items-center justify-center p-0">
                <category.icon className="h-12 w-12 text-ezeu-accent mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-ezeu-dark">{category.title}</h3>
                <ul className="list-none p-0 m-0 space-y-2 text-muted-foreground">
                  {category.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
