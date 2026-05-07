import type { ReactNode } from "react";
import { motion } from "framer-motion";

type TimelineItemProps = {
  title: string;
  subtitle: string;
  period: string;
  children: ReactNode;
  index: number;
};

export function TimelineItem({ title, subtitle, period, children, index }: TimelineItemProps) {
  return (
    <motion.li
      className="relative pl-8"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <span
        className="absolute left-0 top-2 h-3 w-3 rounded-full border border-accent-cyan/60 bg-accent-cyan/25 shadow-[0_0_20px_rgba(34,211,238,0.35)]"
        aria-hidden
      />
      <span className="absolute left-[5px] top-6 bottom-0 w-px bg-gradient-to-b from-white/20 to-transparent" aria-hidden />
      <div className="glass rounded-2xl p-5 sm:p-6">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="text-sm text-accent-cyan/90">{subtitle}</p>
          </div>
          <p className="mt-1 font-mono text-xs text-slate-400 sm:mt-0">{period}</p>
        </div>
        <div className="mt-4 text-sm leading-relaxed text-slate-300">{children}</div>
      </div>
    </motion.li>
  );
}
