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
            fill="#38bdf8"
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
    if (name === 'JavaScript') {
      return (
        <svg {...props} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" fill="#F7DF1E"/>
          <path d="M34.5 30C33.3 32 31.3 33.3 28.9 33.3C26.1 33.3 24.1 31.6 24.1 29.3C24.1 27.1 25.7 25.6 28.3 25.2L29.7 24.9C31.1 24.6 31.6 24.3 31.6 23.5C31.6 22.7 30.9 22.1 29.6 22.1C28.3 22.1 27.5 22.8 27.1 23.7L22.9 22.2C23.6 20.3 25.7 18.7 29.6 18.7C33.3 18.7 35.9 20.5 35.9 23.4C35.9 26.6 33.3 28.2 30.3 28.9L28.9 29.2C27.7 29.5 27.1 29.9 27.1 30.5C27.1 31.3 27.8 31.9 29.1 31.9C30.7 31.9 31.8 31.1 32.3 30L34.5 30Z" fill="#000000"/>
          <path d="M20.1 33H15.9L15.3 30.9H11.2L10.6 33H6.4L11.1 19H15.4L20.1 33ZM14.6 27.9L13.1 23.1C13 22.7 12.8 21.8 12.8 21.8H12.7C12.7 21.8 12.5 22.7 12.4 23.1L10.9 27.9H14.6Z" fill="#000000"/>
        </svg>
      )
    }

    if (name === 'React') {
        return (
            <svg {...props} width="48" height="48" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
                <g stroke="#61DAFB" stroke-width="1" fill="none">
                    <ellipse rx="11" ry="4.2"/>
                    <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                    <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                </g>
            </svg>
        )
    }
    if (name === 'NodeJs') {
      return (
          <svg {...props} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 0C10.7 0 0 10.7 0 24C0 37.3 10.7 48 24 48C37.3 48 48 37.3 48 24C48 10.7 37.3 0 24 0ZM35.8 29.7C35.8 30.5 35.1 31.2 34.3 31.2H30.1C29.4 31.2 29 30.8 28.8 30.2C27.3 26.8 24.3 25.1 20.9 25.1L20.3 25.1C20.3 27.7 20.3 29.8 20.3 32.5C20.3 33.3 19.6 34 18.8 34H14.7C13.9 34 13.2 33.3 13.2 32.5V15.5C13.2 14.7 13.9 14 14.7 14H18.8C19.6 14 20.3 14.7 20.3 15.5V22.2C22.6 22.2 25.2 23.3 26.9 24.8C27.1 25 27.4 25.1 27.6 25.1C28.1 25.1 28.4 24.8 28.6 24.4C29.7 22.3 29.6 19.9 28.5 17.8C28.2 17.3 28.5 16.7 29 16.4L32.1 14.6C32.5 14.4 33 14.6 33.2 15C35.7 19.2 36.4 24.4 35.8 29.7Z" fill="#68a063"/>
          </svg>
      )
    }
    if (name === 'PostgreSql') {
        return (
            <svg {...props} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4C12.95 4 4 12.95 4 24C4 35.05 12.95 44 24 44C35.05 44 44 35.05 44 24C44 12.95 35.05 4 24 4ZM33.1 33.1C33.1 33.1 32.2 34 30.9 34C29.6 34 28.4 33.1 28.4 31.6V26.5H24.3V34H21.2V14H28.4C31.5 14 34 16.1 34 19.6C34 22.2 32.5 24.3 30.1 25.2C31.8 25.8 33.1 27.2 33.1 29.1C33.1 30.3 33.1 33.1 33.1 33.1ZM28.4 23.5C30.3 23.5 31.1 22.1 31.1 20.6C31.1 18.5 29.9 17.1 28.4 17.1H24.3V23.5H28.4Z" fill="#336791"/>
            </svg>
        )
    }
    if(name === 'MongoDb') {
        return (
             <svg {...props} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.01 4C12.96 4 4 12.95 4 24C4 35.05 12.96 44 24.01 44C35.06 44 44.02 35.05 44.02 24C44.02 12.95 35.06 4 24.01 4ZM24.01 38.4C16.05 38.4 9.62 32.02 9.62 24.12C9.62 18.14 13.51 13.1 18.73 11.23C17.65 15.34 18.02 19.01 20.25 21.93C22.47 24.84 25.84 26.29 29.3 26.29C29.98 26.29 30.68 26.22 31.36 26.08C33.12 30.11 30.73 34.69 26.33 36.85C25.64 37.21 24.85 38.4 24.01 38.4Z" fill="#47a248"/>
            </svg>
        )
    }
    if (name === 'Aws') {
        return (
             <svg {...props} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4C12.95 4 4 12.95 4 24C4 35.05 12.95 44 24 44C35.05 44 44 35.05 44 24C44 12.95 35.05 4 24 4ZM29.28 35.1H25.7V31.3C25.7 30.5 25 29.8 24.2 29.8H18.9C18.1 29.8 17.4 30.5 17.4 31.3V35.1H13.8V23.5C13.8 22.7 14.5 22 15.3 22H18.9V25.8C18.9 26.6 19.6 27.3 20.4 27.3H25.7C26.5 27.3 27.2 26.6 27.2 25.8V22H30.8C31.6 22 32.3 22.7 32.3 23.5V29.5C32.3 32.5 31.1 35.1 29.28 35.1Z" fill="#FF9900"/>
            </svg>
        )
    }
    if (name === 'Docker') {
        return (
            <svg {...props} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M44 24C44 20.1 42.1 16.6 39.3 14.3C38.6 12.3 37.1 10.6 35.1 9.7C33.6 6.3 30.1 4 26 4C22.6 4 19.6 5.6 17.7 8.1C14.1 8.2 11.1 10.5 9.7 13.8C6.3 15.3 4 18.7 4 22.7C4 23.1 4 23.6 4.1 24H44Z" fill="#2496ED"/>
                <path d="M40 26H8C5.8 26 4 27.8 4 30V34C4 36.2 5.8 38 8 38H40C42.2 38 44 36.2 44 34V30C44 27.8 42.2 26 40 26ZM14 34H10V30H14V34ZM20 34H16V30H20V34ZM26 34H22V30H26V34Z" fill="#2496ED"/>
            </svg>
        )
    }
     if (name === 'Html') {
        return (
            <svg {...props} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 4H42L39 39L24 44L9 39L6 4Z" fill="#E34F26"/>
                <path d="M24 7V41L36.5 37.5L39 7H24Z" fill="#F16529"/>
                <path d="M24 15V20H32L31 30L24 32V27L28.5 26L29 22H24V15H34L33.5 25H24V32L18.5 30.5L18 25H24V20H17L16 10H34L33 15H24Z" fill="white"/>
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
                <Icon name={skill.icon} className="h-1/2 w-1/2" />
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

    