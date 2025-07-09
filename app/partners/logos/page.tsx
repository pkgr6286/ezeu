import PartnersHero from "@/components/partners-logos/partners-hero"
import LogoGrid from "@/components/partners-logos/logo-grid"
import PartnersCTA from "@/components/partners-logos/partners-cta"

export default function PartnersLogosPage() {
  return (
    <div className="flex flex-col">
      <PartnersHero />
      <LogoGrid />
      <PartnersCTA />
    </div>
  )
}
