import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { SectionTitle } from "./ui/SectionTitle";
import { SkillBadge } from "./ui/SkillBadge";

export function TechStack() {
  return (
    <section id="tech" className="border-b border-white/5 py-20 sm:py-24" aria-labelledby="tech-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Stack"
          title="Tecnologias e competências"
          titleId="tech-heading"
          subtitle="Agrupadas por frente de atuação — do front-end à governança e operação."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              className="glass rounded-3xl p-6"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <h3 className="text-lg font-semibold text-white">{cat.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <SkillBadge key={item} label={item} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
