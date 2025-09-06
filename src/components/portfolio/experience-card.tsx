'use client';

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import type { EXPERIENCE_DATA } from "@/lib/data";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";

type Experience = (typeof EXPERIENCE_DATA)[number];

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border bg-background shadow-sm">
            <Image
              src={experience.logoUrl}
              data-ai-hint={experience.dataAiHint}
              alt={`${experience.company} logo`}
              width={40}
              height={40}
              className="rounded-full object-contain"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold font-headline">{experience.title}</h3>
            <p className="text-md text-primary">{experience.company}</p>
            <p className="text-sm text-muted-foreground">{experience.period}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">
          {experience.description}
        </p>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4">
        <div className="flex flex-wrap gap-2">
          {experience.tags.map(tag => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
