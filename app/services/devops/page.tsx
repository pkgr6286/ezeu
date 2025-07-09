import DevOpsHero from "@/components/devops/devops-hero"
import DevOpsIntro from "@/components/devops/devops-intro"
import KeyChallenges from "@/components/devops/key-challenges"
import HowItWorks from "@/components/devops/how-it-works"
import WhyChooseEzeu from "@/components/devops/why-choose-ezeu"
import ServicesIncluded from "@/components/devops/services-included"
import UseCases from "@/components/devops/use-cases"
import DevOpsCTA from "@/components/devops/devops-cta"

export default function DevOpsServicePage() {
  return (
    <div className="flex flex-col">
      <DevOpsHero />
      <DevOpsIntro />
      <KeyChallenges />
      <HowItWorks />
      <WhyChooseEzeu />
      <ServicesIncluded />
      <UseCases />
      <DevOpsCTA />
    </div>
  )
}
