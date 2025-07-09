import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Brain, Users, Handshake, Settings, GraduationCap } from "lucide-react"

const services = [
  {
    title: "AI-Enabled Software Development",
    description: "AI-first, scalable, custom software solutions tailored to your needs.",
    href: "/services/ai-software-dev",
    icon: Code,
  },
  {
    title: "Retrieval-Augmented Generation (RAG) AI",
    description: "Unlock precise and context-aware AI responses for your enterprise.",
    href: "/services/rag-ai",
    icon: Brain,
  },
  {
    title: "Staffing & Recruitment Services",
    description: "Connecting top talent with leading businesses for long-term success.",
    href: "/services/staffing-recruitment",
    icon: Users,
  },
  {
    title: "Corporate Training Services",
    description: "Empowering your workforce with customized programs for skill development.",
    href: "/services/training",
    icon: GraduationCap,
  },
  {
    title: "Build-Operate-Transfer (BOT) Services",
    description: "Seamlessly establish and transition your offshore operations with minimal risk.",
    href: "/services/bot",
    icon: Handshake,
  },
  {
    title: "DevOps as a Service",
    description: "Build, test, and deploy faster, smarter, and safer with our end-to-end CI/CD solutions.",
    href: "/services/devops",
    icon: Settings,
  },
]

export default function ServicesLandingPage() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center text-center text-white overflow-hidden bg-ezeu-dark">
        <div className="relative z-20 px-4 md:px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white">
            Our Services
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white">Comprehensive solutions to drive your business forward.</p>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-ezeu-light-gray dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-ezeu-dark dark:text-white">Explore Our Offerings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Link href={service.href} key={index} className="group block h-full">
                <Card className="h-full flex flex-col items-center text-center p-6 hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800">
                  <CardHeader className="pb-4">
                    <div className="text-5xl mb-4 text-ezeu-accent">
                      <service.icon className="h-12 w-12 mx-auto" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-ezeu-dark dark:text-white">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground dark:text-ezeu-text-light">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ezeu-dark dark:text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg md:text-xl text-ezeu-text-dark dark:text-ezeu-text-light leading-relaxed mb-8">
            Contact us today to discuss your specific needs and discover how EZEU can help you achieve your goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-ezeu-accent hover:bg-opacity-90 transition-colors md:py-4 md:text-lg md:px-10"
          >
            GET A FREE CONSULTATION
          </Link>
        </div>
      </section>
    </div>
  )
}
