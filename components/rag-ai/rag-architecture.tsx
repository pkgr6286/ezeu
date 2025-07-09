import { MapIcon as Diagram } from "lucide-react"

export default function RagArchitecture() {
  return (
    <section className="py-12 md:py-24 bg-ezeu-dark text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">RAG System Architecture Overview</h2>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md flex flex-col items-center justify-center text-ezeu-dark">
          <Diagram className="h-24 w-24 text-ezeu-accent mb-6" />
          <p className="text-lg text-gray-700 mb-4">
            This section will feature a detailed architecture diagram illustrating the components and workflow of a RAG
            system.
          </p>
          <p className="text-md text-muted-foreground">
            (Placeholder for a visual diagram showing data ingestion, vector database, retriever, LLM, and response
            generation.)
          </p>
        </div>
      </div>
    </section>
  )
}
