
'use client';
import { SKILLS_DATA } from "@/lib/data";
import { SectionWrapper, SectionHeader } from "./section-wrapper";
import { Badge } from "@/components/ui/badge";

function SkillCategory({ title, skills }: { title: string, skills: string[] }) {
  return (
    <div>
      <h3 className="mb-8 text-center font-headline text-2xl font-semibold tracking-tight">
        {title}
      </h3>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <Badge key={skill} variant="outline" className="px-4 py-2 text-lg">
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
      <div className="flex flex-col gap-12">
        <SkillCategory title="Impressive" skills={SKILLS_DATA.impressive} />
        <SkillCategory title="Normal" skills={SKILLS_DATA.normal} />
      </div>
    </SectionWrapper>
  );
}
