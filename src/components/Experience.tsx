import { experiences } from "@/data/experiences";
import { SectionTitle } from "./ui/SectionTitle";
import { TimelineItem } from "./ui/TimelineItem";

export function Experience() {
  return (
    <section id="experiencia" className="border-b border-white/5 py-20 sm:py-24" aria-labelledby="experience-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Trajetória"
          title="Experiência profissional"
          titleId="experience-heading"
          subtitle="Experiência adaptada para evidenciar automação, sistemas internos e impacto em ambientes reais."
        />

        <ol className="relative space-y-6">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              title={exp.company}
              subtitle={exp.role}
              period={exp.period}
              index={index}
            >
              <ul className="grid gap-2">
                {exp.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 flex-none rounded-full bg-slate-500" aria-hidden />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </TimelineItem>
          ))}
        </ol>
      </div>
    </section>
  );
}
