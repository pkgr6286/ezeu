"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const allLogos = [
  { src: "/placeholder.svg?height=80&width=150", alt: "Client 1", category: "Clients" },
  { src: "/placeholder.svg?height=80&width=150", alt: "Tech Partner 1", category: "Tech Partners" },
  { src: "/placeholder.svg?height=80&width=150", alt: "Certification 1", category: "Certifications" },
  { src: "/placeholder.svg?height=80&width=150", alt: "Client 2", category: "Clients" },
  { src: "/placeholder.svg?height=80&width=150", alt: "Tech Partner 2", category: "Tech Partners" },
  { src: "/placeholder.svg?height=80&width=150", alt: "Client 3", category: "Clients" },
  { src: "/placeholder.svg?height=80&width=150", alt: "Certification 2", category: "Certifications" },
  { src: "/placeholder.svg?height=80&width=150", alt: "Tech Partner 3", category: "Tech Partners" },
  { src: "/placeholder.svg?height=80&width=150", alt: "Client 4", category: "Clients" },
  { src: "/placeholder.svg?height=80&width=150", alt: "Client 5", category: "Clients" },
  { src: "/placeholder.svg?height=80&width=150", alt: "Tech Partner 4", category: "Tech Partners" },
  { src: "/placeholder.svg?height=80&width=150", alt: "Certification 3", category: "Certifications" },
]

export default function LogoGrid() {
  const [filter, setFilter] = useState("All")

  const categories = ["All", ...new Set(allLogos.map((logo) => logo.category))]

  const filteredLogos = filter === "All" ? allLogos : allLogos.filter((logo) => logo.category === filter)

  return (
    <section className="py-12 md:py-24 bg-ezeu-light-gray dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-ezeu-dark dark:text-white">
          Our Network of Excellence
        </h2>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={
                filter === category
                  ? "bg-ezeu-accent text-white"
                  : "border-ezeu-accent text-ezeu-dark dark:text-white hover:bg-ezeu-accent hover:text-white"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 justify-items-center max-w-7xl mx-auto">
          {filteredLogos.map((logo, index) => (
            <div
              key={index}
              className="relative w-[150px] h-[80px] flex items-center justify-center p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden group"
            >
              <Image src={logo.src || "/placeholder.svg"} alt={logo.alt} width={150} height={80} objectFit="contain" />
              <div className="absolute inset-0 bg-ezeu-dark bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm font-semibold text-center">{logo.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
