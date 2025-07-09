import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote:
      "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
    author: "JASMINE PEDRAZA",
  },
  {
    quote:
      "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
    author: "MURAD NASER",
  },
  {
    quote:
      "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
    author: "JASMINE PEDRAZA",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-12 md:py-24 bg-ezeu-dark text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials and Reviews</h2>
        <p className="text-lg text-ezeu-accent mb-12">OUR SUCCESS IS MEASURED BY THE SUCCESS OF OUR CLIENTS</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white text-gray-800 dark:bg-gray-800 dark:text-white p-6 shadow-lg">
              <CardContent>
                <p className="italic mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-right">- {testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
