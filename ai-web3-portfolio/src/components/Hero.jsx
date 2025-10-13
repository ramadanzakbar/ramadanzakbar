import { motion } from 'framer-motion';
import { SceneCanvas } from './SceneCanvas';

const heroVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } },
};

const tagVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.8 + index * 0.12, duration: 0.5 },
  }),
};

export const Hero = () => (
  <section className="hero">
    <div className="hero__content">
      <motion.div
        className="hero__copy"
        initial="initial"
        animate="animate"
        variants={heroVariants}
      >
        <span className="hero__eyebrow">AI Engineer • Web3 Futurist</span>
        <h1>
          Memodelkan masa depan
          <span className="glitch" data-text="dengan kecerdasan terdistribusi">
            dengan kecerdasan terdistribusi
          </span>
        </h1>
        <p>
          Saya memadukan machine learning, arsitektur blockchain, dan desain pengalaman manusia
          untuk membangun sistem yang otonom, beretika, dan scalable. Setiap baris kode disusun
          untuk memastikan mesin memahami konteks dan dapat dipercaya.
        </p>
        <div className="hero__cta">
          <a href="#contact" className="btn btn--primary">Kolaborasi</a>
          <a href="#projects" className="btn btn--ghost">Eksplor Proyek</a>
        </div>
        <div className="hero__tags">
          {['Generative AI Pipelines', 'Zero-Knowledge Proofs', 'Neural UX Architect'].map(
            (tag, idx) => (
              <motion.span
                key={tag}
                className="tag"
                initial="hidden"
                animate="visible"
                custom={idx}
                variants={tagVariants}
              >
                {tag}
              </motion.span>
            ),
          )}
        </div>
      </motion.div>
    </div>
    <div className="hero__visual">
      <SceneCanvas />
      <motion.div
        className="holo-card"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <p className="holo-card__label">Realtime AI Ops</p>
        <div className="holo-card__stat">
          <span>latensi inferensi</span>
          <strong>28 ms</strong>
        </div>
        <div className="holo-card__pulse" />
      </motion.div>
    </div>
  </section>
);

