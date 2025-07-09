import { Rocket, Scale, Code, Brain, ShieldCheck, DollarSign } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  {
    icon: Rocket,
    title: "Faster Time to Market",
    description: "Accelerate development cycles with AI-powered tools and efficient methodologies.",
  },
  {
    icon: Scale,
    title: "Scalable Architecture",
    description: "Build robust, future-proof applications designed to grow with your business.",
  },
  {
    icon: Code,
    title: "Full-Stack Expertise",
    description: "Leverage our comprehensive skills across front-end, back-end, and AI integration.",
  },
  {
    icon: Brain,
    title: "Intelligent Automation",
    description: "Integrate AI to automate processes, enhance decision-making, and improve user experiences.",
  },
  {
    icon: ShieldCheck,
    title: "Enhanced Security",
    description: "Develop secure applications with built-in AI-driven threat detection and prevention.",
  },
  {
    icon: DollarSign,
    title: "Optimized Costs",
    description: "Achieve cost-efficiency through streamlined development and intelligent resource allocation.",
  },
]

export default function AiBenefits() {
  return (
    <section className="py-12 md:py-24 bg-ezeu-light-gray">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-ezeu-dark">
          Advantages of AI-Driven Software Development
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="flex flex-col items-center p-6 text-center shadow-md">
              <CardContent className="flex flex-col items-center justify-center p-0">
                <benefit.icon className="h-12 w-12 text-ezeu-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-ezeu-dark">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
