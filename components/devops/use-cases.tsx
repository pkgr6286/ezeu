import { Code, Building, Factory, Rocket, Smartphone } from "lucide-react"

const useCases = [
  {
    icon: Code,
    label: "Dev teams wanting GitOps-native deployments",
  },
  {
    icon: Building,
    label: "Regulated industries with compliance needs (HIPAA, SOC2)",
  },
  {
    icon: Factory,
    label: "Enterprises modernizing legacy pipelines",
  },
  {
    icon: Rocket,
    label: "Startups scaling from MVP to product",
  },
  {
    icon: Smartphone,
    label: "Mobile & microservices deployments with frequent releases",
  },
]

export default function UseCases() {
  return (
    <section className="py-12 md:py-24 bg-ezeu-dark text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Use Cases We Enable</h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-[180px]">
              <useCase.icon className="h-16 w-16 text-ezeu-accent mb-4" />
              <p className="text-lg">{useCase.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
