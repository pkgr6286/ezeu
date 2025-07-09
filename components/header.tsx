import Link from "next/link"
import { Mountain } from "lucide-react"
import { ModeToggle } from "./mode-toggle"

export default function Header() {
  return (
    <header className="px-6 lg:px-12 h-16 flex items-center border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-ezeu-dark shadow-sm">
      <Link href="/" className="flex items-center justify-center gap-2">
        <Mountain className="h-7 w-7 text-ezeu-accent" />
        <span className="font-extrabold text-2xl text-ezeu-dark dark:text-white">EZEU</span>
      </Link>
      <nav className="ml-auto flex items-center gap-6">
        <Link
          href="/"
          className="text-base font-medium text-ezeu-text-dark hover:text-ezeu-accent transition-colors dark:text-ezeu-text-light dark:hover:text-ezeu-accent"
        >
          Home
        </Link>
        <Link
          href="/services"
          className="text-base font-medium text-ezeu-text-dark hover:text-ezeu-accent transition-colors dark:text-ezeu-text-light dark:hover:text-ezeu-accent"
        >
          Services
        </Link>
        <Link
          href="/industries"
          className="text-base font-medium text-ezeu-text-dark hover:text-ezeu-accent transition-colors dark:text-ezeu-text-light dark:hover:text-ezeu-accent"
        >
          Industries
        </Link>
        <Link
          href="/partners/logos"
          className="text-base font-medium text-ezeu-text-dark hover:text-ezeu-accent transition-colors dark:text-ezeu-text-light dark:hover:text-ezeu-accent"
        >
          Clientele
        </Link>
        <Link
          href="/blogs"
          className="text-base font-medium text-ezeu-text-dark hover:text-ezeu-accent transition-colors dark:text-ezeu-text-light dark:hover:text-ezeu-accent"
        >
          Blogs
        </Link>
        <Link
          href="/contact"
          className="text-base font-medium text-ezeu-text-dark hover:text-ezeu-accent transition-colors dark:text-ezeu-text-light dark:hover:text-ezeu-accent"
        >
          Contact Us
        </Link>
        <ModeToggle />
      </nav>
    </header>
  )
}
