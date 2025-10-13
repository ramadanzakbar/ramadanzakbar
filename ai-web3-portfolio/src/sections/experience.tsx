import { motion } from 'framer-motion';
import { SectionHeading } from '../components/section-heading';

const EXPERIENCES = [
  {
    role: 'Lead AI & Web3 Engineer',
    company: 'Flux Quantum Labs',
    period: '2024 — Now',
    impact:
      'Merancang pipeline inference adaptif untuk 200+ node validator dengan orkestrasi agen generatif berlatensi rendah dan audit etika otomatis.',
  },
  {
    role: 'Machine Learning Architect',
    company: 'NeoCeption',
    period: '2021 — 2024',
    impact:
      'Membangun eksperimen reinforcement learning yang mengoptimalkan likuiditas derivatif terdesentralisasi dan memperkuat keamanan protokol.',
  },
  {
    role: 'Full-stack Research Engineer',
    company: 'OpenAugury',
    period: '2019 — 2021',
    impact:
      'Mengembangkan prototipe interface neuronal yang memadukan persona AI adaptif dengan visualisasi data imersif untuk klinik kognitif.',
  },
];

export const ExperienceSection = () => (
  <section id="experience" className="scroll-mt-28 space-y-16 px-6 py-24 sm:px-10">
    <SectionHeading
      eyebrow="Experience"
      subtitle="Mengintegrasikan produk cerdas ke dalam protokol dengan fokus pada kepercayaan, skalabilitas, dan pengalaman manusia."
    >
      Jejak misi lintas protokol dan pengalaman manusia
    </SectionHeading>

    <div className="mx-auto flex max-w-4xl flex-col gap-10">
      {EXPERIENCES.map((exp, idx) => (
        <motion.article
          key={exp.company}
          initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative border-l border-white/20 pl-10"
        >
          <span className="absolute -left-3 top-2 size-3 rounded-full bg-gradient-to-tr from-neon-500 via-royal-500 to-purple-500 shadow-glow" />
          <div className="glass-panel relative rounded-2xl p-6 text-left dark:glass-panel">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-lg font-semibold uppercase tracking-[0.2em] text-white">
                {exp.role}
              </h3>
              <span className="font-mono text-xs uppercase tracking-[0.4em] text-slate-300">
                {exp.period}
              </span>
            </div>
            <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.4em] text-neon-400">
              {exp.company}
            </p>
            <p className="mt-4 text-sm text-slate-300">{exp.impact}</p>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);
