import { Code, Database, Cloud, GitBranch, LayoutDashboard, Brain } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const toolsAndTech = [
  {
    icon: Code,
    title: "Programming Languages",
    items: ["Python", "JavaScript/TypeScript", "Java", "Go", "Rust"],
  },
  {
    icon: Brain,
    title: "AI/ML Frameworks",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "Hugging Face"],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "Cassandra", "Redis", "Elasticsearch"],
  },
  {
    icon: Cloud,
    title: "Cloud Platforms",
    items: ["AWS", "Azure", "Google Cloud Platform", "Vercel"],
  },
  {
    icon: GitBranch,
    title: "DevOps & CI/CD",
    items: ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "GitHub Actions"],
  },
  {
    icon: LayoutDashboard,
    title: "Front-end Frameworks",
    items: ["React", "Next.js", "Angular", "Vue.js", "Svelte"],
  },
]

export default function AiTools() {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-ezeu-dark">Tools & Technologies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {toolsAndTech.map((category, index) => (
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
