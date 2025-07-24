
'use client';
import { SKILLS_DATA } from "@/lib/data";
import { SectionWrapper, SectionHeader } from "./section-wrapper";
import { Card } from "@/components/ui/card";

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
              className="group relative w-full overflow-x-auto whitespace-nowrap"
              style={{ maskImage: 'linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)' }}
            >
              <div className="animate-scroll group-hover:pause inline-block w-max">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="inline-flex flex-col items-center mx-4">
                    <Card 
                      className="group/card relative h-24 w-24 transform overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
                      style={{ backgroundColor: skill.color }}
                    >
                    </Card>
                    <h3 className="mt-2 text-sm font-semibold text-foreground">{skill.name}</h3>
                  </div>
                ))}
              </div>
              <div className="animate-scroll group-hover:pause inline-block w-max" aria-hidden="true">
                 {category.skills.map((skill) => (
                  <div key={skill.name} className="inline-flex flex-col items-center mx-4">
                    <Card 
                      className="group/card relative h-24 w-24 transform overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
                      style={{ backgroundColor: skill.color }}
                    >
                    </Card>
                    <h3 className="mt-2 text-sm font-semibold text-foreground">{skill.name}</h3>
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
