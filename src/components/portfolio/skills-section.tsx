'use client';
import { SKILLS_DATA } from "@/lib/data";
import { SectionWrapper, SectionHeader } from "./section-wrapper";
import { Card } from "@/components/ui/card";
import * as Icons from "lucide-react";

const Icon = ({ name, ...props }: { name: string } & Icons.LucideProps) => {
    const LucideIcon = Icons[name as keyof typeof Icons] as Icons.LucideIcon;
    if (!LucideIcon) {
        // Fallback icon if the name is invalid
        return <Icons.Code {...props} />;
    }
    return <LucideIcon {...props} />;
};


export function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="bg-muted/50">
      <SectionHeader>Skills & Expertise</SectionHeader>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {SKILLS_DATA.map((skill) => (
          <Card 
            key={skill.name} 
            className="flex transform flex-col items-center justify-center gap-4 p-6 text-white transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            style={{ backgroundColor: skill.color }}
          >
            <Icon name={skill.icon} className="h-10 w-10" />
            <h3 className="text-center font-semibold">{skill.name}</h3>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
