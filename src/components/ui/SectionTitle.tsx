import { motion } from "framer-motion";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  titleId?: string;
};

export function SectionTitle({ eyebrow, title, subtitle, titleId }: SectionTitleProps) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow ? (
        <motion.p
          className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan/90"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.35 }}
        >
          {eyebrow}
        </motion.p>
      ) : null}
      <motion.h2
        id={titleId}
        className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.4 }}
      >
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p
          className="mt-3 text-base text-slate-400"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  );
}
