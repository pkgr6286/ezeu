import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <Link href="/services/devops" className="block w-full">
      <section className="relative w-full h-[550px] md:h-[650px] lg:h-[750px] flex items-center justify-center text-center text-white overflow-hidden px-4 md:px-6 cursor-pointer">
        <Image
          src="/images/hero-background.svg"
          alt="Hero Background - Click to learn about DevOps"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0 z-0"
        />
        {/* The overlay div has been removed to make the image fully visible */}
      </section>
    </Link>
  )
}
