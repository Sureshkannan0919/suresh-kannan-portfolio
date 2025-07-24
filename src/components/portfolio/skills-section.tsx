'use client';
import { SKILLS_DATA } from "@/lib/data";
import { SectionWrapper, SectionHeader } from "./section-wrapper";
import { Card } from "@/components/ui/card";

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="bg-muted/50">
      <SectionHeader>Skills & Expertise</SectionHeader>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {SKILLS_DATA.map((skill) => (
          <Card 
            key={skill.name} 
            className="group relative flex aspect-square transform flex-col justify-end overflow-hidden text-white transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            style={{ backgroundColor: skill.color }}
          >
             <div className="absolute inset-0 flex items-center justify-center p-4 transition-transform duration-300 group-hover:scale-110">
                {/* Icon has been removed as requested */}
             </div>
            <div className="bg-black bg-opacity-50 p-2 backdrop-blur-sm">
                <h3 className="text-center text-sm font-semibold">{skill.name}</h3>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
