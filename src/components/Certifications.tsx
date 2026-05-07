import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/data/certifications";
import { SectionTitle } from "./ui/SectionTitle";

export function Certifications() {
  return (
    <section id="certificacoes" className="border-b border-white/5 py-20 sm:py-24" aria-labelledby="certs-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Credenciais"
          title="Certificações"
          titleId="certs-heading"
          subtitle="Formação complementar em segurança e fundamentos corporativos."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {certifications.map((c, i) => (
            <motion.div
              key={c.id}
              className="glass flex gap-4 rounded-3xl p-6"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <Award className="h-6 w-6 text-accent-cyan" aria-hidden />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">{c.name}</h3>
                <p className="mt-1 text-sm text-slate-400">{c.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
