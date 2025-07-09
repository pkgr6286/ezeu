import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote:
      "EZEU helped us find the perfect candidates for our critical tech roles. Their understanding of our needs was exceptional.",
    author: "Tech Company CEO",
  },
  {
    quote:
      "The contract staffing solution provided by EZEU was seamless and allowed us to scale our team quickly without overhead.",
    author: "Startup Founder",
  },
  {
    quote: "We've consistently relied on EZEU for our executive searches, and they always deliver top-tier talent.",
    author: "HR Director, Fortune 500",
  },
]

export default function ClientSuccess() {
  return (
    <section className="py-12 md:py-24 bg-ezeu-dark text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Success & Testimonials</h2>
        <p className="text-lg text-ezeu-accent mb-12">Our commitment to your success is our priority.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white text-gray-800 p-6 shadow-lg">
              <CardContent>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="italic mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-right">- {testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white text-ezeu-dark rounded-lg shadow-md">
            <h3 className="text-5xl font-bold text-ezeu-accent mb-2">95%</h3>
            <p className="text-lg font-semibold">Client Retention Rate</p>
          </div>
          <div className="p-6 bg-white text-ezeu-dark rounded-lg shadow-md">
            <h3 className="text-5xl font-bold text-ezeu-accent mb-2">200+</h3>
            <p className="text-lg font-semibold">Successful Placements Annually</p>
          </div>
          <div className="p-6 bg-white text-ezeu-dark rounded-lg shadow-md">
            <h3 className="text-5xl font-bold text-ezeu-accent mb-2">48 Hrs</h3>
            <p className="text-lg font-semibold">Average Time to Shortlist</p>
          </div>
        </div>
      </div>
    </section>
  )
}
