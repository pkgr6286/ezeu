import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Lightbulb, Users, Settings, Code, Handshake, GraduationCap } from "lucide-react"

const services = [
  {
    title: "RAG as a service",
    description: "Unlock precise and context-aware AI responses for your enterprise.",
    icon: Lightbulb,
    href: "/services/rag-ai",
  },
  {
    title: "Staffing & Recruiting",
    description: "Connecting top talent with businesses for long-term success.",
    icon: Users,
    href: "/services/staffing-recruitment",
  },
  {
    title: "DevOps as a service",
    description: "Automate and optimize your software delivery pipeline for faster releases.",
    icon: Settings,
    href: "/services/devops",
  },
  {
    title: "AI Enabled Software Dev",
    description: "AI-first, scalable, custom software solutions tailored to your needs.",
    icon: Code,
    href: "/services/ai-software-dev",
  },
  {
    title: "BOT Model",
    description: "Seamlessly establish and transition your offshore operations with minimal risk.",
    icon: Handshake,
    href: "/services/bot",
  },
  {
    title: "Corporate Training",
    description: "Empowering organizations by upskilling their workforce with industry-relevant training.",
    icon: GraduationCap,
    href: "/services/training",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-28 bg-white dark:bg-ezeu-dark">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-ezeu-dark dark:text-white">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Link href={service.href} key={index} className="group block h-full">
              <Card className="h-full flex flex-col items-center text-center p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-ezeu-light-gray dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <CardHeader className="pb-6">
                  <div className="text-6xl mb-6 text-ezeu-accent">
                    <service.icon className="h-16 w-16 mx-auto" />
                  </div>
                  <CardTitle className="text-2xl font-semibold text-ezeu-dark dark:text-white leading-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-lg text-ezeu-text-dark dark:text-ezeu-text-light leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
