import Link from "next/link"

export default function DevOpsCTA() {
  return (
    <section className="py-16 md:py-28 bg-ezeu-light-gray dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-12 text-center max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-ezeu-dark dark:text-white leading-tight">
          LET’S AUTOMATE YOUR SOFTWARE DELIVERY.
        </h2>
        <p className="text-lg md:text-xl text-ezeu-text-dark dark:text-ezeu-text-light leading-relaxed mb-10">
          Your Code Deserves a Smarter Delivery Pipeline. EZEU helps teams eliminate bottlenecks and focus on what they
          do best: building great software. Our DevOps Pipeline as a Service ensures you release faster, with fewer
          errors and more control.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-xl font-semibold rounded-lg text-white bg-ezeu-accent hover:bg-opacity-90 transition-colors shadow-lg"
        >
          CONTACT US TODAY!
        </Link>
      </div>
    </section>
  )
}
