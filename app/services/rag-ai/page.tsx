import RagHero from "@/components/rag-ai/rag-hero"
import RagIntro from "@/components/rag-ai/rag-intro"
import RagUseCases from "@/components/rag-ai/rag-use-cases"
import RagArchitecture from "@/components/rag-ai/rag-architecture"
import RagTechnologies from "@/components/rag-ai/rag-technologies"
import RagCTA from "@/components/rag-ai/rag-cta"

export default function RagAiServicePage() {
  return (
    <div className="flex flex-col">
      <RagHero />
      <RagIntro />
      <RagUseCases />
      <RagArchitecture />
      <RagTechnologies />
      <RagCTA />
    </div>
  )
}
