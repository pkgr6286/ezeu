import AiHero from "@/components/ai-software-dev/ai-hero"
import AiBenefits from "@/components/ai-software-dev/ai-benefits"
import AiTools from "@/components/ai-software-dev/ai-tools"
import AiProcess from "@/components/ai-software-dev/ai-process"
import AiCaseStudies from "@/components/ai-software-dev/ai-case-studies"
import AiCTA from "@/components/ai-software-dev/ai-cta"

export default function AiSoftwareDevPage() {
  return (
    <div className="flex flex-col">
      <AiHero />
      <AiBenefits />
      <AiTools />
      <AiProcess />
      <AiCaseStudies />
      <AiCTA />
    </div>
  )
}
