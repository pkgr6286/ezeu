import TestimonialsHero from "@/components/testimonials-page/testimonials-hero"
import TestimonialGrid from "@/components/testimonials-page/testimonial-grid"
import TestimonialsCTA from "@/components/testimonials-page/testimonials-cta"

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col">
      <TestimonialsHero />
      <TestimonialGrid />
      <TestimonialsCTA />
    </div>
  )
}
