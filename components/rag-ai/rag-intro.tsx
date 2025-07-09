export default function RagIntro() {
  return (
    <section className="py-12 md:py-24 bg-ezeu-light-gray">
      <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ezeu-dark">What is RAG Technology?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Retrieval-Augmented Generation (RAG) is a cutting-edge AI technique that enhances the capabilities of Large
          Language Models (LLMs) by allowing them to access and incorporate information from external knowledge bases.
          Unlike traditional LLMs that rely solely on their pre-trained data, RAG systems can retrieve relevant
          documents or data snippets in real-time to generate more accurate, up-to-date, and contextually rich
          responses.
        </p>
        <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed italic">
          This is crucial for enterprise AI applications where factual accuracy, transparency, and the ability to
          reference proprietary data are paramount.
        </p>
      </div>
    </section>
  )
}
