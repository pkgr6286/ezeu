import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface PartnerLogo {
  src: string
  alt: string
  description: string
}

interface PartnerCategorySectionProps {
  title: string
  description: string
  logos: PartnerLogo[]
}

export default function PartnerCategorySection({ title, description, logos }: PartnerCategorySectionProps) {
  return (
    <section className="py-12 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ezeu-dark dark:text-white">{title}</h2>
        <p className="text-lg text-ezeu-text-dark dark:text-ezeu-text-light mb-12 max-w-3xl mx-auto">{description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {logos.map((logo, index) => (
            <Card
              key={index}
              className="flex flex-col items-center p-6 text-center shadow-md bg-white dark:bg-gray-800"
            >
              <CardContent className="flex flex-col items-center justify-center p-0">
                <div className="relative w-[150px] h-[80px] mb-4 flex items-center justify-center">
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    width={150}
                    height={80}
                    objectFit="contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-ezeu-dark dark:text-white">{logo.alt}</h3>
                <p className="text-muted-foreground dark:text-ezeu-text-light">{logo.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
