import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Hospital, DollarSign, Laptop, Factory, Lightbulb } from "lucide-react"

const industries = [
  {
    title: "Information Technology",
    description: "Driving innovation in software, cloud, cybersecurity, and AI solutions for tech companies.",
    icon: Laptop,
  },
  {
    title: "Finance & Banking",
    description: "Enhancing digital transformation, security, and operational efficiency for financial institutions.",
    icon: DollarSign,
  },
  {
    title: "Healthcare & Pharma",
    description:
      "Delivering secure, compliant, and intelligent solutions for healthcare providers and pharmaceutical firms.",
    icon: Hospital,
  },
  {
    title: "Manufacturing & Logistics",
    description: "Optimizing supply chains, automating processes, and implementing smart factory solutions.",
    icon: Factory,
  },
  {
    title: "Government & Public Sector",
    description: "Providing secure and efficient digital services for government agencies and public organizations.",
    icon: Building,
  },
  {
    title: "Retail & E-commerce",
    description:
      "Building engaging platforms, optimizing customer experiences, and streamlining operations for retailers.",
    icon: Lightbulb, // Using Lightbulb as a general icon for innovation/solutions in retail
  },
]

export default function IndustriesLandingPage() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center text-center text-white overflow-hidden bg-ezeu-dark">
        <div className="relative z-20 px-4 md:px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white">
            Industries We Serve
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white">Tailored solutions for diverse sectors.</p>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-ezeu-light-gray dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ezeu-dark dark:text-white">
            Cross-Industry Expertise
          </h2>
          <p className="text-lg md:text-xl text-ezeu-text-dark dark:text-ezeu-text-light leading-relaxed">
            EZEU brings deep industry knowledge and technological expertise to a wide range of sectors. We understand
            the unique challenges and opportunities within each industry, allowing us to develop and implement bespoke
            solutions that drive efficiency, innovation, and competitive advantage.
          </p>
          <p className="mt-6 text-lg md:text-xl text-ezeu-text-dark dark:text-ezeu-text-light leading-relaxed italic">
            Our goal is to empower businesses across the globe with transformative technology.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-ezeu-dark dark:text-white">Sectors We Empower</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="flex flex-col items-center text-center p-6 shadow-md bg-white dark:bg-gray-800"
              >
                <CardHeader className="pb-4">
                  <div className="text-5xl mb-4 text-ezeu-accent">
                    <industry.icon className="h-12 w-12 mx-auto" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-ezeu-dark dark:text-white">
                    {industry.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground dark:text-ezeu-text-light">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-ezeu-light-gray dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ezeu-dark dark:text-white">
            Ready for Industry-Specific Solutions?
          </h2>
          <p className="text-lg md:text-xl text-ezeu-text-dark dark:text-ezeu-text-light leading-relaxed mb-8">
            Connect with our experts to discuss your industry's unique challenges and how EZEU can provide tailored
            technological solutions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-ezeu-accent hover:bg-opacity-90 transition-colors md:py-4 md:text-lg md:px-10"
          >
            GET A CUSTOM CONSULTATION
          </Link>
        </div>
      </section>
    </div>
  )
}
