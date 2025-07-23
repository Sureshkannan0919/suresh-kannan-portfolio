'use client';

import Image from "next/image";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProjectSummary } from "@/app/actions";
import { Github, ExternalLink, WandSparkles, RotateCcw, Loader2 } from "lucide-react";
import type { PROJECTS_DATA } from "@/lib/data";

type Project = (typeof PROJECTS_DATA)[number];

export function ProjectCard({ project }: { project: Project }) {
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSummarized, setIsSummarized] = useState(false);

  const handleSummarize = async () => {
    setIsLoading(true);
    const result = await getProjectSummary(project.description);
    setSummary(result);
    setIsLoading(false);
    setIsSummarized(true);
  };

  const handleReset = () => {
    setSummary(null);
    setIsSummarized(false);
  };

  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <div className="grid md:grid-cols-2">
        <div className="md:order-last">
          <Image
            src={project.imageUrl}
            data-ai-hint={project.dataAiHint}
            alt={project.title}
            width={600}
            height={400}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col p-6">
          <h3 className="text-2xl font-bold font-headline">{project.title}</h3>
          <p className="mt-4 flex-1 text-muted-foreground">
            {isSummarized && summary ? summary : project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map(tech => (
              <Badge key={tech} variant="default" className="bg-primary/10 text-primary hover:bg-primary/20">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            {!isSummarized ? (
                <Button variant="outline" onClick={handleSummarize} disabled={isLoading}>
                {isLoading ? <Loader2 className="animate-spin" /> : <WandSparkles />}
                Summarize
                </Button>
            ) : (
                <Button variant="outline" onClick={handleReset}>
                <RotateCcw />
                Full Text
                </Button>
            )}
            <div className="flex-1" />
            <Button variant="ghost" size="icon" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
                <Github />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                <ExternalLink />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
