
'use client';
import { SKILLS_DATA } from "@/lib/data";
import { SectionWrapper, SectionHeader } from "./section-wrapper";
import { Card } from "@/components/ui/card";
import Image from "next/image";

function SkillCategory({ title, skills }: { title: string, skills: {name: string, imageUrl: string}[] }) {
  return (
    <div>
      <h3 className="mb-8 text-center font-headline text-2xl font-semibold tracking-tight">
        {title}
      </h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {skills.map((skill) => (
          <div key={skill.name} className="group flex flex-col items-center gap-2 text-center">
            <Card className="flex h-24 w-24 items-center justify-center overflow-hidden transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
              <div className="relative h-full w-full">
                {skill.imageUrl ? (
                  <Image
                    src={skill.imageUrl}
                    alt={`${skill.name} logo`}
                    fill
                    sizes="96px"
                    className="object-contain p-4"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-muted" />
                )}
              </div>
            </Card>
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
