import { Lightbulb } from "lucide-react"

export default function AiCaseStudies() {
  return (
    <section className="py-12 md:py-24 bg-ezeu-light-gray">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-ezeu-dark">Case Studies & Client Highlights</h2>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md flex flex-col items-center justify-center">
          <Lightbulb className="h-16 w-16 text-ezeu-accent mb-6" />
          <p className="text-lg text-gray-700 mb-4">
            This section is a placeholder for showcasing our successful AI-enabled software development projects.
          </p>
          <p className="text-md text-muted-foreground">
            Check back soon for detailed case studies demonstrating our expertise and client success stories!
          </p>
        </div>
      </div>
    </section>
  )
}
