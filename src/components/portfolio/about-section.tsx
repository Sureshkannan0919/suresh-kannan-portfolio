'use client';

import Image from "next/image";
import { PORTFOLIO_DATA } from "@/lib/data";
import { SectionWrapper } from "./section-wrapper";
import { Button } from "../ui/button";
import { Download, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export function AboutSection() {
  const { roles } = PORTFOLIO_DATA;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000); // Change role every 2 seconds

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <SectionWrapper id="about">
      <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16">
        <div className="relative h-48 w-48 flex-shrink-0 md:h-64 md:w-64">
          <Image
            src="https://placehold.co/400x400.png"
            alt={PORTFOLIO_DATA.name}
            data-ai-hint="professional headshot"
            width={400}
            height={400}
            className="rounded-full object-cover shadow-lg"
            priority
          />
           <div className="absolute bottom-4 right-4 h-8 w-8 rounded-full bg-accent" />
        </div>
        <div className="text-center md:text-left">
          <p className="font-headline text-sm font-medium uppercase tracking-widest text-primary">
            Introduction
          </p>
          <h1 className="mt-2 font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            {PORTFOLIO_DATA.name}
          </h1>
          <p className="mt-2 font-headline text-2xl font-medium text-primary h-8">
            {roles[currentRoleIndex]}
          </p>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {PORTFOLIO_DATA.bio}
          </p>
          <div className="mt-8 flex justify-center gap-4 md:justify-start">
            <Button size="lg" asChild>
              <a href={`mailto:${PORTFOLIO_DATA.email}`}>
                <Mail />
                Contact Me
              </a>
            </Button>
            <Button size="lg" variant="outline">
              <Download />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
