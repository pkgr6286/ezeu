import { Laptop, DollarSign, Heart, Building, Factory } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const industries = [
  {
    icon: Laptop,
    title: "Information Technology (IT)",
    description: "Specializing in software development, cybersecurity, data science, and cloud engineering roles.",
  },
  {
    icon: DollarSign,
    title: "Finance & Banking",
    description: "Recruiting for roles in fintech, investment banking, risk management, and financial analysis.",
  },
  {
    icon: Heart,
    title: "Healthcare & Pharma",
    description: "Connecting talent for medical, pharmaceutical, and biotechnology sectors.",
  },
  {
    icon: Building,
    title: "Manufacturing & Engineering",
    description: "Sourcing engineers, production managers, and supply chain specialists.",
  },
  {
    icon: Factory,
    title: "Retail & E-commerce",
    description: "Finding professionals for digital marketing, logistics, and operations in the retail space.",
  },
]

export default function IndustriesServed() {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-ezeu-dark">Industries We Serve</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <Card key={index} className="flex flex-col items-center p-6 text-center shadow-md">
              <CardContent className="flex flex-col items-center justify-center p-0">
                <industry.icon className="h-12 w-12 text-ezeu-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-ezeu-dark">{industry.title}</h3>
                <p className="text-muted-foreground">{industry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
