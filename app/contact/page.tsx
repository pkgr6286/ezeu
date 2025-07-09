import ContactHero from "@/components/contact/contact-hero"
import ContactDetails from "@/components/contact/contact-details"
import ContactForm from "@/components/contact/contact-form"
import ContactMap from "@/components/contact/contact-map"
import QuickContactSidebar from "@/components/contact/quick-contact-sidebar"

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <ContactHero />
      <section className="py-12 md:py-24 bg-ezeu-light-gray dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content area for form and map */}
          <div className="lg:col-span-2 flex flex-col gap-12">
            <ContactDetails />
            <ContactForm />
            <ContactMap />
          </div>

          {/* Sidebar for quick contact details */}
          <div className="lg:col-span-1">
            <QuickContactSidebar />
          </div>
        </div>
      </section>
    </div>
  )
}
