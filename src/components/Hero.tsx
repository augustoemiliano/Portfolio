import { motion } from "framer-motion";
import { Download, Github, Mail } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "./ui/Button";

export function Hero() {
  const resumeHref =
    site.resumePdfPath != null
      ? `${import.meta.env.BASE_URL}${site.resumePdfPath.replace(/^\//, "")}`
      : null;

  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-white/5"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-fade bg-[length:48px_48px] bg-top [background-position-y:-1px]" />
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-accent-violet/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-40 h-96 w-96 rounded-full bg-accent-cyan/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent-cyan/90">Portfólio profissional</p>
          <h1 id="hero-heading" className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {site.name}
          </h1>
          <p className="mt-3 text-lg text-slate-300 sm:text-xl">{site.title}</p>
          <p className="mt-6 text-base leading-relaxed text-slate-400 sm:text-lg">{site.heroHeadline}</p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">{site.heroSub}</p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="#projetos">Ver projetos</Button>
            <Button href="#contato" variant="ghost">
              <Mail className="h-4 w-4" aria-hidden />
              Entrar em contato
            </Button>
            <Button href={site.githubUrl} variant="outline" external>
              <Github className="h-4 w-4" aria-hidden />
              GitHub
            </Button>
            {resumeHref ? (
              <Button href={resumeHref} variant="outline" download>
                <Download className="h-4 w-4" aria-hidden />
                Baixar currículo
              </Button>
            ) : (
              <Button type="button" variant="outline" disabled aria-label="Currículo em PDF disponível em breve">
                <Download className="h-4 w-4" aria-hidden />
                Currículo (em breve)
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
