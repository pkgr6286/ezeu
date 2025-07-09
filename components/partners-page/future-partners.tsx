import { PlusCircle } from "lucide-react"

export default function FuturePartners() {
  return (
    <section className="py-12 md:py-24 bg-ezeu-dark text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Expanding Our Network</h2>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md flex flex-col items-center justify-center text-ezeu-dark">
          <PlusCircle className="h-16 w-16 text-ezeu-accent mb-6" />
          <p className="text-lg text-gray-700 mb-4">
            We are continuously seeking new strategic partnerships to enhance our capabilities and deliver even greater
            value.
          </p>
          <p className="text-md text-muted-foreground">
            If you are interested in collaborating with EZEU, please reach out to us!
          </p>
        </div>
      </div>
    </section>
  )
}
