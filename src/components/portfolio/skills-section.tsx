
'use client';
import { SKILLS_DATA } from "@/lib/data";
import { SectionWrapper, SectionHeader } from "./section-wrapper";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="bg-muted/50">
      <SectionHeader>Skills & Expertise</SectionHeader>
      <div className="flex flex-col gap-12">
        {SKILLS_DATA.map((category) => (
          <div key={category.title}>
            <h3 className="mb-6 text-center font-headline text-2xl font-semibold tracking-tight">
              {category.title}
            </h3>
            <div
              className="group relative w-full overflow-hidden whitespace-nowrap"
              style={{ maskImage: 'linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)' }}
            >
              <div className="animate-scroll group-hover:pause flex w-max items-center gap-8">
                {[...category.skills, ...category.skills].map((skill, index) => (
                  <div key={`${skill.name}-${index}`} className="inline-flex flex-col items-center gap-2 text-center my-4">
                    <Card 
                      className="group/card relative flex h-24 w-24 items-center justify-center overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
                    >
                      {skill.imageUrl ? (
                        <Image
                          src={skill.imageUrl}
                          alt={`${skill.name} logo`}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="h-12 w-12" />
                      )}
                    </Card>
                    <h3 className="w-24 text-sm font-semibold text-foreground">{skill.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
