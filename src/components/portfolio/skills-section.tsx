'use client';
import { SKILLS_DATA } from "@/lib/data";
import { SectionWrapper, SectionHeader } from "./section-wrapper";
import { Progress } from "@/components/ui/progress";
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
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
        {SKILLS_DATA.map((skill) => (
          <div key={skill.name}>
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                 <Icon name={skill.icon} className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">{skill.name}</h3>
              </div>
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2 [&>div]:bg-accent" />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
