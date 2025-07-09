import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote:
      "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
    author: "JASMINE PEDRAZA",
    rating: 5,
    industry: "Software Development",
  },
  {
    quote:
      "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
    author: "MURAD NASER",
    rating: 5,
    industry: "IT Consulting",
  },
  {
    quote:
      "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
    author: "JASMINE PEDRAZA",
    rating: 4,
    industry: "Recruitment",
  },
  {
    quote:
      "EZEU's dedication to understanding our unique challenges and delivering tailored solutions truly sets them apart. Highly recommended!",
    author: "ANNA CHEN",
    rating: 5,
    industry: "Corporate Training",
  },
  {
    quote:
      "The team at EZEU provided exceptional support throughout our project. Their expertise in AI integration was invaluable.",
    author: "DAVID LEE",
    rating: 5,
    industry: "AI Solutions",
  },
  {
    quote:
      "We saw significant improvements in our operational efficiency after implementing EZEU's DevOps solutions. A true partner!",
    author: "SARAH MILLER",
    rating: 4,
    industry: "DevOps Services",
  },
]

export default function TestimonialGrid() {
  return (
    <section className="py-12 md:py-24 bg-ezeu-light-gray dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-ezeu-dark dark:text-white">Testimonials and Reviews</h2>
        <p className="text-lg text-ezeu-accent mb-12">OUR SUCCESS IS MEASURED BY THE SUCCESS OF OUR CLIENTS</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col p-6 shadow-lg bg-white dark:bg-gray-800">
              <CardContent className="flex flex-col items-center justify-center p-0">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300 dark:text-gray-600"
                      }`}
                    />
                  ))}
                </div>
                <p className="italic text-gray-700 dark:text-ezeu-text-light mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-ezeu-dark dark:text-white text-right w-full">- {testimonial.author}</p>
                {testimonial.industry && (
                  <span className="mt-2 inline-block bg-ezeu-accent text-white text-xs px-3 py-1 rounded-full">
                    {testimonial.industry}
                  </span>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
