import { Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function QuickContactSidebar() {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md sticky top-4 lg:top-24">
      <h3 className="text-2xl font-bold mb-6 text-ezeu-dark dark:text-white text-center lg:text-left">Quick Contact</h3>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-ezeu-accent rounded-full text-white">
            <Phone className="h-6 w-6" />
          </div>
          <div>
            <p className="text-lg font-semibold text-ezeu-dark dark:text-white">Call Us</p>
            <Link href="tel:+918310465203" className="text-muted-foreground dark:text-ezeu-text-light hover:underline">
              +918310465203
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="p-3 bg-ezeu-accent rounded-full text-white">
            <Mail className="h-6 w-6" />
          </div>
          <div>
            <p className="text-lg font-semibold text-ezeu-dark dark:text-white">Email Us</p>
            <Link
              href="mailto:Lakshmi@ezeu.in"
              className="text-muted-foreground dark:text-ezeu-text-light hover:underline"
            >
              Lakshmi@ezeu.in
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
