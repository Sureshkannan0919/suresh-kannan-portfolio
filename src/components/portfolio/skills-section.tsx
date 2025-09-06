
'use client';
import { SKILLS_DATA } from "@/lib/data";
import { SectionWrapper, SectionHeader } from "./section-wrapper";
import Image from "next/image";

function SkillCategory({ title, skills }: { title: string, skills: {name: string, imageUrl: string}[] }) {
  return (
    <div>
      <h3 className="mb-8 text-center font-headline text-2xl font-semibold tracking-tight">
        {title}
      </h3>
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-10">
        {skills.map((skill) => (
          <div key={skill.name} className="group flex flex-col items-center gap-2 text-center">
            <div className="relative h-20 w-20 transition-transform duration-300 group-hover:-translate-y-2">
              {skill.imageUrl ? (
                <Image
                  src={skill.imageUrl}
                  alt={`${skill.name} logo`}
                  fill
                  sizes="80px"
                  className="object-contain"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center rounded-lg bg-muted" />
              )}
            </div>
            <h4 className="text-sm font-semibold text-foreground">{skill.name}</h4>
          </div>
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
