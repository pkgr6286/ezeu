import Link from "next/link"

export default function StaffingCTA() {
  return (
    <section className="py-12 md:py-24 bg-ezeu-light-gray">
      <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ezeu-dark">Ready to Hire Top Talent Now?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
          Let EZEU streamline your recruitment process and connect you with the best professionals in the industry.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-ezeu-accent hover:bg-opacity-90 transition-colors md:py-4 md:text-lg md:px-10"
        >
          CONTACT US TO HIRE
        </Link>
      </div>
    </section>
  )
}
