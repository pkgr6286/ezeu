import { Code, Users, Scale, Monitor, Building, Laptop } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const programs = [
  {
    icon: Code,
    title: "Tech Upskilling",
    description: "Stay ahead with training in AI, Machine Learning, Cloud Computing, Cybersecurity, and DevOps.",
  },
  {
    icon: Users,
    title: "Leadership Development",
    description: "Cultivate effective leaders with programs on strategic thinking, team management, and communication.",
  },
  {
    icon: Scale,
    title: "Compliance Training",
    description:
      "Ensure your team adheres to industry regulations and best practices with specialized compliance courses.",
  },
]

const deliveryModes = [
  {
    icon: Building,
    title: "In-person Training",
    description: "Engaging, hands-on sessions conducted at your premises or a chosen venue for direct interaction.",
    benefits: ["Direct interaction", "Tailored environment", "Team building"],
  },
  {
    icon: Laptop,
    title: "Virtual Training",
    description: "Flexible online sessions delivered via live webinars and interactive platforms, accessible anywhere.",
    benefits: ["Flexibility", "Wider reach", "Cost-effective"],
  },
  {
    icon: Monitor,
    title: "Hybrid Training",
    description: "A blend of in-person and virtual components, offering the best of both worlds for diverse teams.",
    benefits: ["Blended learning", "Adaptability", "Optimized engagement"],
  },
]

export default function TrainingOverview() {
  return (
    <section className="py-12 md:py-24 bg-ezeu-light-gray dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-ezeu-dark dark:text-white">
          Our Training Programs & Delivery Modes
        </h2>

        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-ezeu-dark dark:text-white">Core Programs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="flex flex-col items-center p-6 text-center shadow-md bg-white dark:bg-gray-800"
              >
                <CardContent className="flex flex-col items-center justify-center p-0">
                  <program.icon className="h-12 w-12 text-ezeu-accent mb-4" />
                  <h4 className="text-xl font-semibold mb-2 text-ezeu-dark dark:text-white">{program.title}</h4>
                  <p className="text-muted-foreground dark:text-ezeu-text-light">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-ezeu-dark dark:text-white">
            Flexible Delivery Modes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {deliveryModes.map((mode, index) => (
              <Card
                key={index}
                className="flex flex-col items-center p-6 text-center shadow-md bg-white dark:bg-gray-800"
              >
                <CardContent className="flex flex-col items-center justify-center p-0">
                  <mode.icon className="h-12 w-12 text-ezeu-accent mb-4" />
                  <h4 className="text-xl font-semibold mb-2 text-ezeu-dark dark:text-white">{mode.title}</h4>
                  <p className="text-muted-foreground dark:text-ezeu-text-light mb-4">{mode.description}</p>
                  <ul className="list-disc list-inside text-left text-sm text-gray-600 dark:text-ezeu-text-light">
                    {mode.benefits.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
