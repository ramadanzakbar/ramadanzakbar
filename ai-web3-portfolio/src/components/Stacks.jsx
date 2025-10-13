import { motion } from 'framer-motion';

const stacks = [
  {
    title: 'AI Systems',
    tagline: 'Model orchestration & evaluasi adaptif',
    items: ['LLM distillation', 'Multimodal reasoning', 'MLOps observability'],
  },
  {
    title: 'Web3 Protocols',
    tagline: 'Keamanan dan konsensus tingkat protokol',
    items: ['Zero-knowledge rollups', 'Solidity auditing', 'Wallet UX biometrik'],
  },
  {
    title: 'Experience Layer',
    tagline: 'Fusi manusia + mesin',
    items: ['Neuro UI prototyping', 'Haptic feedback loops', 'Immersive data storytelling'],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + index * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

export const Stacks = () => (
  <section className="section stacks" id="stack">
    <motion.div
      className="section__header"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7 }}
    >
      <p className="section__eyebrow">Gugus kompetensi</p>
      <h2>Ekosistem keahlian yang modular dan plug-and-play</h2>
      <p>
        Menggabungkan optimisasi model, protokol terdesentralisasi, dan interaksi manusia untuk
        menghadirkan produk digital yang intuitif namun tahan sensor.
      </p>
    </motion.div>

    <div className="stacks__grid">
      {stacks.map((stack, idx) => (
        <motion.article
          key={stack.title}
          className="stack-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={idx}
          variants={cardVariants}
        >
          <div className="stack-card__beam" />
          <h3>{stack.title}</h3>
          <span>{stack.tagline}</span>
          <ul>
            {stack.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  </section>
);

