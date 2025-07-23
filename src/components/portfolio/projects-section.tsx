import { PROJECTS_DATA } from "@/lib/data";
import { SectionWrapper, SectionHeader } from "./section-wrapper";
import { ProjectCard } from "./project-card";

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <SectionHeader>Projects</SectionHeader>
      <div className="grid gap-12 md:grid-cols-1">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
}
