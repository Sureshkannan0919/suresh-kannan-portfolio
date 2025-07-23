import { EXPERIENCE_DATA } from "@/lib/data";
import { SectionWrapper, SectionHeader } from "./section-wrapper";
import { ExperienceCard } from "./experience-card";

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="bg-muted/50">
      <SectionHeader>Work Experience</SectionHeader>
      <div className="relative flex flex-col gap-12">
        {/* Timeline line */}
        <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-border" />
        {EXPERIENCE_DATA.map((exp, index) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </SectionWrapper>
  );
}
