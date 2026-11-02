import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import { certifications } from "@/data/certifications";
import { education } from "@/data/education";
import { SectionTitle } from "./ui/SectionTitle";

const cardMotion = (i: number) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.4, delay: i * 0.05 },
});

export function Certifications() {
  return (
    <section id="certificacoes" className="border-b border-white/5 py-20 sm:py-24" aria-labelledby="certs-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Credenciais"
          title="Formação e certificações"
          titleId="certs-heading"
          subtitle="Graduação em andamento, cursos técnicos e certificações em segurança da informação e suporte de TI."
        />

        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">Formação acadêmica</h3>
        <ul className="mb-12 grid gap-5 md:grid-cols-3">
          {education.map((e, i) => (
            <motion.li key={e.id} className="glass flex gap-4 rounded-3xl p-6" {...cardMotion(i)}>
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <GraduationCap className="h-6 w-6 text-accent-cyan" aria-hidden />
              </div>
              <div>
                <h4 className="text-base font-semibold text-white">{e.course}</h4>
                <p className="mt-1 text-sm text-slate-300">{e.institution}</p>
                <p className="mt-1 font-mono text-xs text-slate-400">
                  {e.period}
                  {e.status ? ` · ${e.status}` : ""}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>

        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">Certificações</h3>
        <ul className="grid gap-5 md:grid-cols-2">
          {certifications.map((c, i) => (
            <motion.li key={c.id} className="glass flex gap-4 rounded-3xl p-6" {...cardMotion(i)}>
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <Award className="h-6 w-6 text-accent-cyan" aria-hidden />
              </div>
              <div>
                <h4 className="text-base font-semibold text-white">{c.name}</h4>
                <p className="mt-1 text-sm text-slate-300">{c.issuer}</p>
                <p className="mt-1 font-mono text-xs text-slate-400">{c.date}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
