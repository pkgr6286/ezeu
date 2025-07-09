import Image from "next/image"
import { Users, Code, GraduationCap } from "lucide-react"

export default function AboutUsSection() {
  return (
    <section className="py-16 md:py-28 bg-ezeu-light-gray dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ezeu-dark dark:text-white">About Us</h2>
          <p className="text-lg md:text-xl text-ezeu-text-dark dark:text-ezeu-text-light leading-relaxed">
            EZEU is a dynamic and solutions-driven company committed to easing business challenges across multiple
            domains. Our expertise spans Recruitment, Staffing, Software Development, Corporate Training, Fresh Graduate
            Training Programs, and BOT (Build, Operate, and Transfer) Services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8 text-center lg:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="p-4 rounded-full bg-ezeu-accent text-white flex-shrink-0">
                <Users className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-ezeu-dark dark:text-white">Recruitment & Staffing</h3>
                <p className="text-lg text-ezeu-text-dark dark:text-ezeu-text-light leading-relaxed">
                  Connecting top talent with businesses for long-term success, ensuring the right fit for your team.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="p-4 rounded-full bg-ezeu-accent text-white flex-shrink-0">
                <Code className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-ezeu-dark dark:text-white">Software Development</h3>
                <p className="text-lg text-ezeu-text-dark dark:text-ezeu-text-light leading-relaxed">
                  Delivering high-performance, scalable, and innovative software solutions tailored to your unique
                  business needs.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="p-4 rounded-full bg-ezeu-accent text-white flex-shrink-0">
                <GraduationCap className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-ezeu-dark dark:text-white">Corporate Training</h3>
                <p className="text-lg text-ezeu-text-dark dark:text-ezeu-text-light leading-relaxed">
                  Empowering organizations by upskilling their workforce with industry-relevant training programs.
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-80 md:h-96 lg:h-[500px] w-full rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=500&width=700"
              alt="EZEU Team Collaboration"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
