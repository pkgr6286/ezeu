import Image from "next/image"

export default function PartnersSection() {
  const partnerLogos = [
    "/placeholder.svg?height=80&width=150",
    "/placeholder.svg?height=80&width=150",
    "/placeholder.svg?height=80&width=150",
    "/placeholder.svg?height=80&width=150",
    "/placeholder.svg?height=80&width=150",
  ]

  return (
    <section className="py-12 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-ezeu-dark dark:text-white">
          Proud Partners In Growth
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partnerLogos.map((src, index) => (
            <div
              key={index}
              className="relative w-[150px] h-[80px] flex items-center justify-center p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={src || "/placeholder.svg"}
                alt={`Partner Logo ${index + 1}`}
                width={150}
                height={80}
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
