import { motion } from 'framer-motion';
import { SectionHeading } from '../components/section-heading';

const STACK_CATEGORIES = [
  {
    title: 'AI Systems',
    description: 'Model orchestration, evaluasi adaptif, dan observabilitas lifecycle end-to-end.',
    items: ['LLM distillation', 'Multimodal reasoning', 'Realtime MLOps'],
  },
  {
    title: 'Web3 Protocols',
    description: 'Keamanan dan tata kelola terdesentralisasi untuk infrastruktur tanpa izin.',
    items: ['Zero-knowledge rollups', 'On-chain analytics', 'Smart wallet UX'],
  },
  {
    title: 'Experience Layer',
    description: 'Fusi human-in-the-loop dengan interface imersif berfokus pada etika.',
    items: ['Neural UX prototyping', 'Voice-first agents', 'Immersive data storytelling'],
  },
];

export const StackSection = () => (
  <section id="stack" className="scroll-mt-28 space-y-16 px-6 py-24 sm:px-10">
    <SectionHeading
      eyebrow="AI Stack"
      subtitle="Stack modular yang memungkinkan integrasi AI dan Web3 dalam satu ekosistem yang dapat diandalkan."
    >
      Ekosistem kompetensi yang adaptif dan plug-and-play
    </SectionHeading>

    <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
      {STACK_CATEGORIES.map((category, idx) => (
        <motion.article
          key={category.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: idx * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 text-left shadow-xl backdrop-blur-xl transition"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-neon-500/15 via-transparent to-purple-500/10 opacity-0 transition group-hover:opacity-100" />
          <div className="relative flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold uppercase tracking-[0.25em] text-white">
                {category.title}
              </h3>
              <span className="rounded-full border border-neon-500/30 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.4em] text-neon-400">
                {String(idx + 1).padStart(2, '0')}
              </span>
            </div>
            <p className="text-sm text-slate-300">{category.description}</p>
            <ul className="flex flex-wrap gap-3 text-[0.7rem] uppercase tracking-[0.35em] text-slate-200">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/10 bg-black/30 px-3 py-1 transition group-hover:border-neon-500/60 group-hover:text-neon-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);
