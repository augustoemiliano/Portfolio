import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Github, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { site } from "@/data/site";
import { SectionTitle } from "./ui/SectionTitle";
import { Button } from "./ui/Button";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Sem acesso à área de transferência: abre o cliente de e-mail como alternativa.
      setCopied(false);
      window.location.href = `mailto:${site.email}`;
    }
  }

  const waHref = `https://wa.me/${site.whatsappE164}`;

  return (
    <section id="contato" className="border-b border-white/5 py-20 sm:py-24" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Vamos conversar"
          title="Contato"
          titleId="contact-heading"
          subtitle="Aberto a oportunidades júnior em desenvolvimento full stack e automação."
        />

        <div className="grid gap-6 lg:grid-cols-12">
          <motion.div
            className="glass rounded-3xl p-6 sm:p-8 lg:col-span-7"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4 }}
          >
            <dl className="grid gap-6 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">E-mail</dt>
                <dd className="mt-2">
                  <a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-accent-cyan" href={`mailto:${site.email}`}>
                    <Mail className="h-4 w-4 text-accent-cyan/90" aria-hidden />
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">Telefone</dt>
                <dd className="mt-2">
                  <a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-accent-cyan" href={`tel:+${site.whatsappE164}`}>
                    <Phone className="h-4 w-4 text-accent-cyan/90" aria-hidden />
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">GitHub</dt>
                <dd className="mt-2">
                  <a
                    className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-accent-cyan"
                    href={site.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 text-accent-cyan/90" aria-hidden />
                    github.com/{site.githubHandle}
                    <span className="sr-only">(abre em nova aba)</span>
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">Localização</dt>
                <dd className="mt-2 inline-flex items-start gap-2 text-sm text-slate-200">
                  <MapPin className="mt-0.5 h-4 w-4 flex-none text-accent-cyan/90" aria-hidden />
                  {site.location}
                </dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <span className="sr-only" role="status" aria-live="polite">
                {copied ? "E-mail copiado para a área de transferência." : ""}
              </span>
              <Button type="button" variant="primary" onClick={copyEmail}>
                {copied ? (
                  <>
                    <Check className="h-4 w-4" aria-hidden />
                    E-mail copiado
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" aria-hidden />
                    Copiar e-mail
                  </>
                )}
              </Button>
              <Button href={waHref} variant="outline" external>
                <MessageCircle className="h-4 w-4" aria-hidden />
                WhatsApp
                <span className="sr-only">(abre em nova aba)</span>
              </Button>
            </div>
          </motion.div>

          <motion.aside
            className="glass rounded-3xl p-6 sm:p-8 lg:col-span-5"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <p className="text-sm leading-relaxed text-slate-300">
              Prefiro mensagens objetivas: stack desejada, modelo de trabalho e link da vaga. Respondo o quanto antes.
            </p>
            <p className="mt-4 text-xs text-slate-400">
              Ao clicar em WhatsApp, você será direcionado para o aplicativo ou para o WhatsApp Web com o número{" "}
              <span className="font-mono text-slate-300">{site.phoneDisplay}</span>.
            </p>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
