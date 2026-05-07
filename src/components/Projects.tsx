import { projects } from "@/data/projects";
import { SectionTitle } from "./ui/SectionTitle";
import { ProjectCard } from "./ui/ProjectCard";

export function Projects() {
  return (
    <section id="projetos" className="border-b border-white/5 py-20 sm:py-24" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Portfólio"
          title="Projetos"
          titleId="projects-heading"
          subtitle="Seleção de repositórios que mostram arquitetura, organização e visão de produto."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
