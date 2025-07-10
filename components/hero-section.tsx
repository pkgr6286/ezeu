import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <Link href="/contact" className="block w-full">
      <section className="relative w-full flex items-center justify-center text-center overflow-hidden cursor-pointer">
        <Image
          src="/images/hero-main-image.svg"
          alt="Hero section image - Click to automate your software delivery"
          // Removed layout="fill" and objectFit="contain"
          // Providing large intrinsic dimensions for Next.js optimization
          width={1920} // Example width, adjust if specific SVG dimensions are known
          height={1080} // Example height, adjust if specific SVG dimensions are known
          quality={100}
          className="w-full h-auto block" // Ensures full width, maintains aspect ratio, and prevents cropping
        />
        {/* The dark overlay, text content, and button have been removed */}
      </section>
    </Link>
  )
}
