import { GitBranch, Package, TestTube, ShieldCheck, Rocket, Monitor } from "lucide-react"

const steps = [
  {
    icon: GitBranch,
    title: "Source Integration",
    description:
      "We plug into your code repositories (GitHub, GitLab, Bitbucket, etc.) and auto-trigger builds on commits and pull requests.",
  },
  {
    icon: Package,
    title: "Continuous Integration (CI)",
    description:
      "Automatically build artifacts with clean logging and versioning. Parallelized builds reduce wait time.",
  },
  {
    icon: TestTube,
    title: "Automated Testing",
    description: "Run unit, integration, and security tests across environments to catch issues early in the cycle.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance Checks",
    description: "Shift-left security with vulnerability scanning, secrets detection, and policy enforcement.",
  },
  {
    icon: Rocket,
    title: "Continuous Deployment (CD)",
    description:
      "Push to staging, QA, or production using advanced deployment strategies like Canary releases and Blue-Green deployments.",
  },
  {
    icon: Monitor,
    title: "Monitoring & Rollbacks",
    description: "Integrate observability tools for real-time monitoring and enable instant rollbacks if issues arise.",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-12 md:py-24 bg-ezeu-dark text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">How EZEU’s DevOps Pipeline as a Service Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white text-ezeu-dark rounded-lg shadow-lg"
            >
              <step.icon className="h-12 w-12 text-ezeu-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
