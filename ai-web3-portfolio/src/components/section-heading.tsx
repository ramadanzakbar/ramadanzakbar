import { motion } from 'framer-motion';
import type { PropsWithChildren, ReactNode } from 'react';

type SectionHeadingProps = PropsWithChildren<{
  eyebrow: string;
  subtitle?: ReactNode;
}>;

export const SectionHeading = ({ eyebrow, children, subtitle }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.45 }}
    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    className="mx-auto flex max-w-3xl flex-col gap-4 text-center"
  >
    <span className="mx-auto rounded-full border border-white/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.5em] text-neon-400 shadow-glow">
      {eyebrow}
    </span>
    <h2 className="text-balance text-3xl font-semibold uppercase tracking-[0.08em] text-white sm:text-4xl">
      {children}
    </h2>
    {subtitle && <p className="text-balance text-base text-slate-300 sm:text-lg">{subtitle}</p>}
  </motion.div>
);
