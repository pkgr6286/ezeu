import Link from "next/link"
import { Twitter, Linkedin, Facebook, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-ezeu-dark text-ezeu-text-light py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4 text-white">Contact Us</h3>
          <p className="text-sm leading-relaxed mb-4 text-ezeu-text-light">
            EZEU (OPC) PRIVATE LIMITED
            <br />
            Corporate Office: #25, J P Nagar 9th Phase,
            <br />
            Bangalore 560076
          </p>
          <div className="flex items-center gap-3 mb-2">
            <Phone className="h-5 w-5 text-ezeu-accent" />
            <span className="text-sm text-ezeu-text-light">+918310465203</span>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <Mail className="h-5 w-5 text-ezeu-accent" />
            <span className="text-sm text-ezeu-text-light">Lakshmi@ezeu.in</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-sm text-ezeu-text-light hover:text-ezeu-accent transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-sm text-ezeu-text-light hover:text-ezeu-accent transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/industries"
                className="text-sm text-ezeu-text-light hover:text-ezeu-accent transition-colors"
              >
                Industries
              </Link>
            </li>
            <li>
              <Link
                href="/partners/logos"
                className="text-sm text-ezeu-text-light hover:text-ezeu-accent transition-colors"
              >
                Clientele
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="text-sm text-ezeu-text-light hover:text-ezeu-accent transition-colors">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-ezeu-text-light hover:text-ezeu-accent transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Company & Legal */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4 text-white">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-sm text-ezeu-text-light hover:text-ezeu-accent transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/testimonials"
                className="text-sm text-ezeu-text-light hover:text-ezeu-accent transition-colors"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/partners" className="text-sm text-ezeu-text-light hover:text-ezeu-accent transition-colors">
                Partners
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="text-sm text-ezeu-text-light hover:text-ezeu-accent transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-of-service"
                className="text-sm text-ezeu-text-light hover:text-ezeu-accent transition-colors"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
          <h3 className="text-xl font-semibold mt-6 mb-4 text-white">Connect With Us</h3>
          <div className="flex gap-4">
            <Link href="#" className="text-ezeu-text-light hover:text-ezeu-accent transition-colors">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-ezeu-text-light hover:text-ezeu-accent transition-colors">
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-ezeu-text-light hover:text-ezeu-accent transition-colors">
              <Facebook className="h-6 w-6" />
            </Link>
          </div>
        </div>

        {/* CTA Block */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left lg:col-span-1">
          <h3 className="text-xl font-semibold mb-4 text-white">Your Code Deserves a Smarter Delivery Pipeline</h3>
          <p className="text-sm leading-relaxed mb-6 text-ezeu-text-light">
            EZEU helps teams eliminate bottlenecks and focus on what they do best: building great software. Our DevOps
            Pipeline as a Service ensures you release faster, with fewer errors and more control.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-ezeu-accent text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors text-base"
          >
            CONTACT US TODAY!
          </Link>
        </div>
      </div>
      <div className="w-full text-center text-xs text-ezeu-text-light mt-10 border-t border-gray-700 pt-6">
        <p>&copy; {new Date().getFullYear()} EZEU (OPC) PRIVATE LIMITED. All rights reserved.</p>
      </div>
    </footer>
  )
}
