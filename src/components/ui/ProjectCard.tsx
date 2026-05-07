import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import type { Project } from "@/data/projects";
import { SkillBadge } from "./SkillBadge";
import { Button } from "./Button";

type ProjectCardProps = {
  project: Project;
  index: number;
};

const statusStyles: Record<Project["status"], string> = {
  "em-desenvolvimento": "border-amber-400/25 bg-amber-400/10 text-amber-200",
  "em-evolucao": "border-accent-cyan/25 bg-accent-cyan/10 text-accent-cyan",
  concluido: "border-emerald-400/25 bg-emerald-400/10 text-emerald-200",
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isFeatured = Boolean(project.featured);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className={
        isFeatured
          ? "glass relative overflow-hidden rounded-3xl p-6 shadow-card sm:p-8 md:col-span-2"
          : "glass relative overflow-hidden rounded-3xl p-6 shadow-card sm:p-7"
      }
    >
      {isFeatured ? (
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent-cyan/15 blur-3xl"
          aria-hidden
        />
      ) : null}

      <div className="relative flex flex-col gap-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            {project.featuredLabel ? (
              <p className="mb-2 inline-flex items-center gap-2 rounded-full border border-accent-violet/25 bg-accent-violet/10 px-3 py-1 text-xs font-semibold text-accent-violet">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                {project.featuredLabel}
              </p>
            ) : null}
            <h3 className={isFeatured ? "text-2xl font-semibold text-white" : "text-xl font-semibold text-white"}>
              {project.name}
            </h3>
          </div>
          <span
            className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles[project.status]}`}
          >
            {project.statusLabel}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-slate-300 sm:text-base">{project.summary}</p>

        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Tecnologias</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <SkillBadge key={t} label={t} />
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Destaques</p>
          <ul className="grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-accent-cyan/80" aria-hidden />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-2 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <Button key={link.href} href={link.href} variant="outline" external className="px-3 py-2 text-xs sm:text-sm">
              {link.label}
              <ArrowUpRight className="h-4 w-4 opacity-80" aria-hidden />
            </Button>
          ))}
          {project.demoUrl ? (
            <Button href={project.demoUrl} variant="primary" external className="px-3 py-2 text-xs sm:text-sm">
              Demo ao vivo
              <ArrowUpRight className="h-4 w-4 opacity-90" aria-hidden />
            </Button>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
