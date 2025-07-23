'use client';

import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getExperienceSummary } from "@/app/actions";
import { WandSparkles, RotateCcw, Loader2 } from "lucide-react";
import type { EXPERIENCE_DATA } from "@/lib/data";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";

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
          {isSummarized && summary ? summary : experience.description}
        </p>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4">
        <div className="flex flex-wrap gap-2">
          {experience.tags.map(tag => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
        <div>
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
      </CardFooter>
    </Card>
  );
}
