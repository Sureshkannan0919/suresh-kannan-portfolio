'use client';
import { SKILLS_DATA } from "@/lib/data";
import { SectionWrapper, SectionHeader } from "./section-wrapper";
import { Card } from "@/components/ui/card";
import * as Icons from "lucide-react";

const Icon = ({ name, ...props }: { name: string } & Icons.LucideProps) => {
    const LucideIcon = Icons[name as keyof typeof Icons] as Icons.LucideIcon;

    if (name === 'NextJs') {
      return (
        <svg
          {...props}
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
            fill="currentColor"
          />
          <path
            d="M32.5343 15.8824H35.8823V34.5883H32.5343V19.3971L21.1432 34.5883H17.7952V15.8824H21.1432V31.0736L32.5343 15.8824Z"
            fill="white"
          />
        </svg>
      );
    }
    if (name === 'TailwindCss') {
      return (
        <svg
          {...props}
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.647 15.8824C20.5282 15.8824 22.8235 18.1777 22.8235 21.0588C22.8235 23.94 20.5282 26.2353 17.647 26.2353C14.7659 26.2353 12.4706 23.94 12.4706 21.0588C12.4706 18.1777 14.7659 15.8824 17.647 15.8824ZM30.3529 23.5294C33.2341 23.5294 35.5294 25.8247 35.5294 28.7059C35.5294 31.5871 33.2341 33.8824 30.3529 33.8824C27.4717 33.8824 25.1764 31.5871 25.1764 28.7059C25.1764 25.8247 27.4717 23.5294 30.3529 23.5294Z"
            fill="currentColor"
          />
        </svg>
      );
    }
    if (name === 'Python') {
        return (
            <svg {...props} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12C24 12 28.5 12 28.5 16.5C28.5 21 24 21 24 21V18H31.5V6H21V15H24V12Z" fill="#3776AB"/>
                <path d="M24 36C24 36 19.5 36 19.5 31.5C19.5 27 24 27 24 27V30H16.5V42H27V33H24V36Z" fill="#FFD43B"/>
            </svg>
        )
    }

    if (!LucideIcon) {
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
            className="group relative flex aspect-square transform flex-col justify-end overflow-hidden text-white transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            style={{ backgroundColor: skill.color }}
          >
             <div className="absolute inset-0 flex items-center justify-center p-4 transition-transform duration-300 group-hover:scale-110">
                <Icon name={skill.icon} className="h-1/2 w-1/2" style={{ color: name === 'TailwindCss' || name === 'NextJs' ? '#fff' : skill.color }} />
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
