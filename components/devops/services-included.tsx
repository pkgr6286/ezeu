import { LayoutDashboard, Container, Cloud, HardDrive, TestTube, Archive, Shield, BarChart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: LayoutDashboard,
    title: "CI/CD Pipeline Setup & Management",
  },
  {
    icon: Container,
    title: "Containerization with Docker & Kubernetes",
  },
  {
    icon: Cloud,
    title: "Multi-Environment Deployment (Dev, Staging, Prod)",
  },
  {
    icon: HardDrive,
    title: "High Availability & Disaster Recovery Design",
  },
  {
    icon: TestTube,
    title: "Automated Testing Frameworks",
  },
  {
    icon: Archive,
    title: "Artifact Storage & Versioning",
  },
  {
    icon: Shield,
    title: "Security & Compliance Automation",
  },
  {
    icon: BarChart,
    title: "Monitoring, Logging & Alerting Integration",
  },
  {
    icon: BarChart, // Reusing icon, adjust if a specific icon is available
    title: "Pipeline Analytics & Optimization",
  },
]

export default function ServicesIncluded() {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-ezeu-dark">
          What Our DevOps Pipeline Services Include
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col items-center p-6 text-center shadow-md">
              <CardContent className="flex flex-col items-center justify-center p-0">
                <service.icon className="h-12 w-12 text-ezeu-accent mb-4" />
                <h3 className="text-xl font-semibold text-ezeu-dark">{service.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
