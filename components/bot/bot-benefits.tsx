import { DollarSign, Users, TrendingUp, ShieldCheck, Scale, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  {
    icon: DollarSign,
    title: "Cost Efficiency",
    description:
      "Reduce operational costs by leveraging offshore talent and infrastructure without large upfront investments.",
  },
  {
    icon: Users,
    title: "Access to Skilled Workforce",
    description: "Gain access to a vast pool of specialized talent, quickly building a high-performing team.",
  },
  {
    icon: TrendingUp,
    title: "Reduced Risk",
    description: "Minimize market entry risks as EZEU handles initial setup, compliance, and operational challenges.",
  },
  {
    icon: ShieldCheck,
    title: "Full Control & Transparency",
    description: "Maintain strategic control and visibility over your operations from day one.",
  },
  {
    icon: Scale,
    title: "Scalable Setup",
    description: "Easily scale your team and operations up or down based on project demands.",
  },
  {
    icon: Lightbulb,
    title: "Focus on Core Business",
    description: "Free up your internal resources to concentrate on core competencies and strategic initiatives.",
  },
]

export default function BotBenefits() {
  return (
    <section className="py-12 md:py-24 bg-ezeu-dark text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Advantages of EZEU's BOT Model</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="flex flex-col items-center p-6 text-center bg-white text-ezeu-dark rounded-lg shadow-lg"
            >
              <CardContent className="flex flex-col items-center justify-center p-0">
                <benefit.icon className="h-12 w-12 text-ezeu-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
