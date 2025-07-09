import StaffingHero from "@/components/staffing-recruitment/staffing-hero"
import StaffingOverview from "@/components/staffing-recruitment/staffing-overview"
import IndustriesServed from "@/components/staffing-recruitment/industries-served"
import ClientSuccess from "@/components/staffing-recruitment/client-success"
import StaffingCTA from "@/components/staffing-recruitment/staffing-cta"

export default function StaffingRecruitmentPage() {
  return (
    <div className="flex flex-col">
      <StaffingHero />
      <StaffingOverview />
      <IndustriesServed />
      <ClientSuccess />
      <StaffingCTA />
    </div>
  )
}
