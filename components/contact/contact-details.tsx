import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook } from "lucide-react"
import Link from "next/link"

export default function ContactDetails() {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ezeu-dark dark:text-white text-center lg:text-left">
        Contact Information
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-ezeu-dark dark:text-white">Office Address</h3>
          <p className="text-muted-foreground dark:text-ezeu-text-light">
            EZEU (OPC) PRIVATE LIMITED
            <br />
            Corporate Office: #25, J P Nagar 9th Phase,
            <br />
            Bangalore 560076
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-ezeu-dark dark:text-white">Get in touch</h3>
          <div className="flex items-center gap-3 mb-2">
            <Phone className="h-5 w-5 text-ezeu-accent" />
            <p className="text-muted-foreground dark:text-ezeu-text-light">+918310465203</p>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <Mail className="h-5 w-5 text-ezeu-accent" />
            <p className="text-muted-foreground dark:text-ezeu-text-light">Lakshmi@ezeu.in</p>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-ezeu-accent" />
            <p className="text-muted-foreground dark:text-ezeu-text-light">Bangalore, India</p>
          </div>
          <h3 className="text-xl font-semibold mt-6 mb-4 text-ezeu-dark dark:text-white">Social Media</h3>
          <div className="flex gap-4">
            <Link href="#" className="text-ezeu-accent hover:text-ezeu-dark dark:hover:text-white transition-colors">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-ezeu-accent hover:text-ezeu-dark dark:hover:text-white transition-colors">
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-ezeu-accent hover:text-ezeu-dark dark:hover:text-white transition-colors">
              <Facebook className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
