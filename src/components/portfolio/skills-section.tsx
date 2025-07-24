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
              className="group relative w-full overflow-hidden whitespace-nowrap"
              style={{ maskImage: 'linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)' }}
            >
              <div className="animate-scroll group-hover:pause inline-block w-max">
                {category.skills.map((skill) => (
                  <Card 
                    key={skill.name} 
                    className="group/card relative mx-4 inline-flex h-24 w-24 transform flex-col justify-end overflow-hidden text-white transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
                    style={{ backgroundColor: skill.color }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center p-4 transition-transform duration-300 group-hover/card:scale-110">
                        {/* Icon has been removed as requested */}
                    </div>
                    <div className="bg-black bg-opacity-50 p-2 backdrop-blur-sm">
                        <h3 className="text-center font-semibold">{skill.name}</h3>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="animate-scroll group-hover:pause inline-block w-max" aria-hidden="true">
                 {category.skills.map((skill) => (
                  <Card 
                    key={skill.name} 
                    className="group/card relative mx-4 inline-flex h-24 w-24 transform flex-col justify-end overflow-hidden text-white transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
                    style={{ backgroundColor: skill.color }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center p-4 transition-transform duration-300 group-hover/card:scale-110">
                        {/* Icon has been removed as requested */}
                    </div>
                    <div className="bg-black bg-opacity-50 p-2 backdrop-blur-sm">
                        <h3 className="text-center font-semibold">{skill.name}</h3>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
