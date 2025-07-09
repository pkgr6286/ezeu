import Image from "next/image"

export default function PartnersHero() {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center text-center text-white overflow-hidden">
      <Image
        src="/placeholder.svg?height=400&width=1200"
        alt="Partners & Clients Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-ezeu-dark bg-opacity-70 z-10" />
      <div className="relative z-20 px-4 md:px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          Our Valued Partners & Clients
        </h1>
        <p className="mt-4 text-lg md:text-xl">Collaborating for mutual success and innovation.</p>
      </div>
    </section>
  )
}
