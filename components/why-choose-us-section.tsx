import { CheckCircle } from "lucide-react"

export default function WhyChooseUsSection() {
  return (
    <section className="py-12 md:py-24 bg-ezeu-light-gray dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-ezeu-dark dark:text-white">
          Why Choose us?
        </h2>
        <p className="max-w-3xl mx-auto text-center text-lg text-ezeu-text-dark dark:text-ezeu-text-light mb-12">
          The Ezeu brand is built on the principles of efficiency, reliability, and innovation—we are here to ease
          business problems and drive seamless execution.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            "Reliable, personal, and responsive",
            "Excellent representation",
            "Knowledgeable and experienced team",
            "Personalized and strategic approach",
            "Expert advice",
          ].map((reason, index) => (
            <div key={index} className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <CheckCircle className="h-6 w-6 text-ezeu-accent flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-800 dark:text-white">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
