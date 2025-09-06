
'use client';
import { SKILLS_DATA } from "@/lib/data";
import { SectionWrapper, SectionHeader } from "./section-wrapper";
import { Badge } from "@/components/ui/badge";

function SkillCategory({ title, skills, variant }: { title: string, skills: string[], variant: "default" | "secondary" }) {
  return (
    <div>
      <h3 className="mb-8 text-center font-headline text-2xl font-semibold tracking-tight">
        {title}
      </h3>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <Badge key={skill} variant={variant} className="px-4 py-2 text-lg">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  )
}

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="bg-muted/50">
      <SectionHeader>Skills & Expertise</SectionHeader>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <SkillCategory title="AI & Data Science" skills={SKILLS_DATA.aiAndDataScience} variant="default" />
        <SkillCategory title="Programming Languages" skills={SKILLS_DATA.programmingLanguages} variant="secondary" />
        <SkillCategory title="Frameworks" skills={SKILLS_DATA.frameworks} variant="default" />
        <SkillCategory title="Tools & Databases" skills={SKILLS_DATA.toolsAndDatabases} variant="secondary" />
      </div>
    </SectionWrapper>
  );
}
