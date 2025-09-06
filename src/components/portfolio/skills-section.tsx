
'use client';
import { SKILLS_DATA } from "@/lib/data";
import { SectionWrapper, SectionHeader } from "./section-wrapper";
import { Badge } from "@/components/ui/badge";
import type { VariantProps } from "class-variance-authority";
import { badgeVariants } from "@/components/ui/badge";

type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];

function SkillCategory({ title, skills, variant }: { title: string, skills: string[], variant: BadgeVariant }) {
  return (
    <div>
      <h3 className="mb-8 text-center font-headline text-2xl font-semibold tracking-tight">
        {title}
      </h3>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <Badge key={skill} variant={variant} className="px-4 py-2 text-lg bg-transparent">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  )
}

export function SkillsSection() {
  const variants: BadgeVariant[] = ["outline-primary", "outline-secondary", "outline-destructive", "outline-accent" ];
  const categories = [
    { title: "AI & Data Science", skills: SKILLS_DATA.aiAndDataScience },
    { title: "Programming Languages", skills: SKILLS_DATA.programmingLanguages },
    { title: "Frameworks", skills: SKILLS_DATA.frameworks },
    { title: "Tools & Databases", skills: SKILLS_DATA.toolsAndDatabases },
  ];

  return (
    <SectionWrapper id="skills" className="bg-muted/50">
      <SectionHeader>Skills & Expertise</SectionHeader>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {categories.map((category, index) => (
            <SkillCategory 
                key={category.title}
                title={category.title} 
                skills={category.skills} 
                variant={variants[index % variants.length]}
            />
        ))}
      </div>
    </SectionWrapper>
  );
}
