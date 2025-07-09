import { CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  {
    title: "Zero to CI/CD in Days",
    description: "We set up secure, scalable pipelines without your team lifting a finger.",
  },
  {
    title: "Tool-Agnostic",
    description: "GitHub Actions, Jenkins, GitLab CI, CircleCI, ArgoCD, Docker, Kubernetes—we support them all.",
  },
  {
    title: "Built for Scale",
    description:
      "Auto-scale your pipelines for thousands of daily builds without downtime, with HA and DR built in for business continuity.",
  },
  {
    title: "DevSecOps Ready",
    description: "Security is baked into every stage, from commit to deploy.",
  },
  {
    title: "Custom Dashboards",
    description: "Get real-time pipeline visibility with metrics that matter to your business.",
  },
  {
    title: "Cloud-Native & On-Prem Support",
    description: "Whether you run on AWS, Azure, GCP, or bare metal, we’ve got you covered.",
  },
  {
    title: "Smart Release Strategies",
    description: "Support for Blue-Green, Canary, and Rolling updates with integrated monitoring and auto-rollbacks.",
  },
]

export default function WhyChooseEzeu() {
  return (
    <section className="py-12 md:py-24 bg-ezeu-light-gray">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-ezeu-dark">
          Why Choose EZEU for DevOps-as-a-Service?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="flex flex-col items-center p-6 text-center shadow-md">
              <CardContent className="flex flex-col items-center justify-center p-0">
                <CheckCircle className="h-10 w-10 text-ezeu-accent mb-4" />
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
