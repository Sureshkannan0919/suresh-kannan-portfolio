import { EDUCATION_DATA } from "@/lib/data";
import { SectionWrapper, SectionHeader } from "./section-wrapper";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export function EducationSection() {
  return (
    <SectionWrapper id="education">
      <SectionHeader>Education & Certifications</SectionHeader>
      <div className="grid gap-8 md:grid-cols-2">
        {EDUCATION_DATA.map((edu) => (
          <Card key={edu.id} className="flex flex-col">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex flex-col">
                  <CardTitle className="font-headline text-xl">{edu.degree}</CardTitle>
                  <CardDescription className="mt-1">{edu.institution}</CardDescription>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{edu.description}</p>
            </CardContent>
            <div className="p-6 pt-0">
                <p className="text-sm text-muted-foreground">{edu.period}</p>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
