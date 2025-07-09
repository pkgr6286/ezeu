import PartnersHero from "@/components/partners-page/partners-hero"
import PartnersIntro from "@/components/partners-page/partners-intro"
import PartnerCategorySection from "@/components/partners-page/partner-category-section"
import FuturePartners from "@/components/partners-page/future-partners"
import PartnersCTA from "@/components/partners-page/partners-cta"

export default function PartnersPage() {
  const cloudProviders = [
    {
      src: "/placeholder.svg?height=80&width=150",
      alt: "AWS Logo",
      description: "Leading cloud infrastructure provider.",
    },
    {
      src: "/placeholder.svg?height=80&width=150",
      alt: "Azure Logo",
      description: "Microsoft's cloud computing service.",
    },
    {
      src: "/placeholder.svg?height=80&width=150",
      alt: "Google Cloud Logo",
      description: "Google's suite of cloud services.",
    },
  ]

  const techAlliances = [
    {
      src: "/placeholder.svg?height=80&width=150",
      alt: "NVIDIA Logo",
      description: "AI computing and graphics technology.",
    },
    {
      src: "/placeholder.svg?height=80&width=150",
      alt: "Red Hat Logo",
      description: "Open source software solutions.",
    },
    {
      src: "/placeholder.svg?height=80&width=150",
      alt: "Cisco Logo",
      description: "Networking hardware and software.",
    },
  ]

  const governmentAgencies = [
    {
      src: "/placeholder.svg?height=80&width=150",
      alt: "Gov Agency 1",
      description: "Supporting public sector initiatives.",
    },
    {
      src: "/placeholder.svg?height=80&width=150",
      alt: "Gov Agency 2",
      description: "Collaborating on national projects.",
    },
  ]

  return (
    <div className="flex flex-col">
      <PartnersHero />
      <PartnersIntro />
      <PartnerCategorySection
        title="Cloud Providers"
        description="Our partnerships with leading cloud providers ensure scalable, secure, and high-performance solutions."
        logos={cloudProviders}
      />
      <PartnerCategorySection
        title="Technology Alliances"
        description="Collaborating with innovative tech companies to bring cutting-edge solutions to our clients."
        logos={techAlliances}
      />
      <PartnerCategorySection
        title="Government & Public Sector"
        description="Trusted by government agencies to deliver secure and reliable technology solutions."
        logos={governmentAgencies}
      />
      <FuturePartners />
      <PartnersCTA />
    </div>
  )
}
