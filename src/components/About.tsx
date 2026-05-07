import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { site } from "@/data/site";
import { SectionTitle } from "./ui/SectionTitle";

export function About() {
  return (
    <section id="sobre" className="border-b border-white/5 py-20 sm:py-24" aria-labelledby="about-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Posicionamento"
          title="Sobre mim"
          titleId="about-heading"
          subtitle="TI corporativo com foco crescente em desenvolvimento full stack."
        />

        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
          >
            <p className="text-lg leading-relaxed text-slate-200">{site.aboutLead}</p>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-400">
              {site.aboutBody.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </motion.div>

          <motion.aside
            className="glass rounded-3xl p-6 lg:col-span-5"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">O que reforça meu perfil</p>
            <ul className="mt-4 space-y-3">
              {site.aboutHighlights.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-accent-mint/90" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
