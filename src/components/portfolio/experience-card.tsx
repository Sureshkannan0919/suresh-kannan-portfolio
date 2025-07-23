'use client';

import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getExperienceSummary } from "@/app/actions";
import { WandSparkles, RotateCcw } from "lucide-react";
import { Loader2 } from "lucide-react";
import type { EXPERIENCE_DATA } from "@/lib/data";

type Experience = (typeof EXPERIENCE_DATA)[number];

export function ExperienceCard({ experience }: { experience: Experience }) {
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSummarized, setIsSummarized] = useState(false);

  const handleSummarize = async () => {
    setIsLoading(true);
    const result = await getExperienceSummary(experience.description);
    setSummary(result);
    setIsLoading(false);
    setIsSummarized(true);
  };

  const handleReset = () => {
    setSummary(null);
    setIsSummarized(false);
  };

  return (
    <div className="relative flex items-start gap-6">
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
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="text-xl font-semibold font-headline">{experience.title}</h3>
            <p className="text-sm text-muted-foreground">{experience.period}</p>
        </div>
        <p className="text-md text-primary">{experience.company}</p>
        <p className="mt-4 text-muted-foreground">
          {isSummarized && summary ? summary : experience.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {experience.tags.map(tag => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
        <div className="mt-4">
          {!isSummarized ? (
            <Button variant="outline" size="sm" onClick={handleSummarize} disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <WandSparkles />
              )}
              Summarize with AI
            </Button>
          ) : (
            <Button variant="outline" size="sm" onClick={handleReset}>
              <RotateCcw />
              Show Full Text
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
