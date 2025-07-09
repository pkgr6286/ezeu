import Image from "next/image"

export default function TrainingClients() {
  const clientLogos = [
    "/placeholder.svg?height=80&width=150",
    "/placeholder.svg?height=80&width=150",
    "/placeholder.svg?height=80&width=150",
    "/placeholder.svg?height=80&width=150",
    "/placeholder.svg?height=80&width=150",
    "/placeholder.svg?height=80&width=150",
  ]

  return (
    <section className="py-12 md:py-24 bg-ezeu-dark text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Trusted by Leading Companies</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clientLogos.map((src, index) => (
            <Image
              key={index}
              src={src || "/placeholder.svg"}
              alt={`Client Logo ${index + 1}`}
              width={150}
              height={80}
              objectFit="contain"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
