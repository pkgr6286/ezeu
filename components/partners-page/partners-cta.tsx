import Link from "next/link"

export default function PartnersCTA() {
  return (
    <section className="py-12 md:py-24 bg-ezeu-light-gray dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ezeu-dark dark:text-white">
          Ready to Forge a Partnership?
        </h2>
        <p className="text-lg md:text-xl text-ezeu-text-dark dark:text-ezeu-text-light leading-relaxed mb-8">
          Let's explore how we can achieve mutual success through collaboration.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-ezeu-accent hover:bg-opacity-90 transition-colors md:py-4 md:text-lg md:px-10"
        >
          CONTACT OUR PARTNERSHIPS TEAM
        </Link>
      </div>
    </section>
  )
}
