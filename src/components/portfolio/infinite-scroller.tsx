'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { AboutSection } from './about-section';
import { ExperienceSection } from './experience-section';
import { ProjectsSection } from './projects-section';
import { SkillsSection } from './skills-section';
import { EducationSection } from './education-section';
import { ContactSection } from './contact-section';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const Loader = () => (
  <div className="container max-w-4xl px-4 py-16 sm:py-24">
    <Card className="animate-pulse">
      <CardHeader>
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-1/4" />
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      </CardContent>
    </Card>
  </div>
);

export function InfiniteScroller() {
  const sections = useMemo(() => [
    { id: 'about', component: <AboutSection /> },
    { id: 'experience', component: <ExperienceSection /> },
    { id: 'projects', component: <ProjectsSection /> },
    { id: 'skills', component: <SkillsSection /> },
    { id: 'education', component: <EducationSection /> },
    { id: 'contact', component: <ContactSection /> },
  ], []);

  const [loadedSections, setLoadedSections] = useState([sections[0]]);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const nextSectionIndex = loadedSections.length;
          if (nextSectionIndex < sections.length) {
            setTimeout(() => {
              setLoadedSections(prev => [...prev, sections[nextSectionIndex]]);
            }, 300); // Small delay to show loader
          }
        }
      },
      { rootMargin: '100px', threshold: 0.1 }
    );

    const currentTrigger = triggerRef.current;
    if (currentTrigger) {
      observer.observe(currentTrigger);
    }

    return () => {
      if (currentTrigger) {
        observer.unobserve(currentTrigger);
      }
    };
  }, [loadedSections, sections]);

  return (
    <div>
      {loadedSections.map(section => (
        <React.Fragment key={section.id}>
            {section.component}
        </React.Fragment>
      ))}
      {loadedSections.length < sections.length && <div ref={triggerRef}><Loader /></div>}
    </div>
  );
}
