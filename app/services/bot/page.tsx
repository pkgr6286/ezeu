import BotHero from "@/components/bot/bot-hero"
import BotIntro from "@/components/bot/bot-intro"
import BotProcess from "@/components/bot/bot-process"
import BotBenefits from "@/components/bot/bot-benefits"
import BotUseCases from "@/components/bot/bot-use-cases"
import BotCTA from "@/components/bot/bot-cta"

export default function BotServicePage() {
  return (
    <div className="flex flex-col">
      <BotHero />
      <BotIntro />
      <BotProcess />
      <BotBenefits />
      <BotUseCases />
      <BotCTA />
    </div>
  )
}
