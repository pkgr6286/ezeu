import { Users, Briefcase, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const approaches = [
  {
    icon: Users,
    title: "Talent Acquisition",
    description:
      "Comprehensive search and screening to find candidates who perfectly match your company culture and technical requirements.",
  },
  {
    icon: Briefcase,
    title: "Contract Staffing",
    description:
      "Flexible staffing solutions for short-term projects, seasonal demands, or specialized skill gaps, ensuring business continuity.",
  },
  {
    icon: Award,
    title: "Executive Hiring",
    description:
      "Discreet and strategic recruitment for leadership and executive roles, identifying candidates who drive organizational growth.",
  },
]

export default function StaffingOverview() {
  return (
    <section className="py-12 md:py-24 bg-ezeu-light-gray">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-ezeu-dark">Our Approach to Talent Acquisition</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {approaches.map((approach, index) => (
            <Card key={index} className="flex flex-col items-center p-6 text-center shadow-md">
              <CardContent className="flex flex-col items-center justify-center p-0">
                <approach.icon className="h-12 w-12 text-ezeu-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-ezeu-dark">{approach.title}</h3>
                <p className="text-muted-foreground">{approach.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
