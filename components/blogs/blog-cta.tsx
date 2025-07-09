import Link from "next/link"

export default function BlogCTA() {
  return (
    <section className="py-16 md:py-28 bg-white dark:bg-ezeu-dark">
      <div className="container mx-auto px-6 md:px-12 text-center max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-ezeu-dark dark:text-white leading-tight">
          Have a Topic in Mind?
        </h2>
        <p className="text-lg md:text-xl text-ezeu-text-dark dark:text-ezeu-text-light leading-relaxed mb-10">
          We're always looking for new insights and collaborations. If you have a topic you'd like us to cover or are
          interested in contributing, let us know!
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-xl font-semibold rounded-lg text-white bg-ezeu-accent hover:bg-opacity-90 transition-colors shadow-lg"
        >
          SUGGEST A TOPIC
        </Link>
      </div>
    </section>
  )
}
