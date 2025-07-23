import { EXPERIENCE_DATA } from "@/lib/data";
import { SectionWrapper, SectionHeader } from "./section-wrapper";
import { ExperienceCard } from "./experience-card";

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="bg-muted/50">
      <SectionHeader>Work Experience</SectionHeader>
      <div className="grid gap-8 md:grid-cols-2">
        {EXPERIENCE_DATA.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </SectionWrapper>
  );
}
