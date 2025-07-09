import TrainingHero from "@/components/training/training-hero"
import TrainingOverview from "@/components/training/training-overview"
import TrainingOutcomes from "@/components/training/training-outcomes"
import TrainingClients from "@/components/training/training-clients"
import TrainingCTA from "@/components/training/training-cta"

export default function CorporateTrainingPage() {
  return (
    <div className="flex flex-col">
      <TrainingHero />
      <TrainingOverview />
      <TrainingOutcomes />
      <TrainingClients />
      <TrainingCTA />
    </div>
  )
}
