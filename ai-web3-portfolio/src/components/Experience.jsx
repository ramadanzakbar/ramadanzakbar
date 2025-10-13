import { motion } from 'framer-motion';

const experience = [
  {
    role: 'Lead AI & Web3 Engineer',
    company: 'Flux Quantum Labs',
    period: '2024 — kini',
    impact:
      'Merancang pipeline inference adaptif untuk 200+ node validator dengan orkestrasi model generatif berlatensi rendah.',
  },
  {
    role: 'Machine Learning Architect',
    company: 'NeoCeption',
    period: '2021 — 2024',
    impact:
      'Membangun rangkaian eksperimen reinforcement learning untuk optimisasi likuiditas platform derivatif terdesentralisasi.',
  },
  {
    role: 'Full-stack Research Engineer',
    company: 'OpenAugury',
    period: '2019 — 2021',
    impact:
      'Mengembangkan prototipe interface neuronal yang menggabungkan persona AI adaptif dengan visualisasi data imersif.',
  },
];

export const Experience = () => (
  <section className="section experience" id="experience">
    <motion.div
      className="section__header"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7 }}
    >
      <p className="section__eyebrow">Jejak misi</p>
      <h2>Integrasi produk cerdas pada skala protokol</h2>
    </motion.div>

    <div className="timeline">
      {experience.map((item, idx) => (
        <motion.article
          key={item.company}
          className="timeline__item"
          initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: idx * 0.1 }}
        >
          <div className="timeline__dot" />
          <div className="timeline__content">
            <header>
              <h3>{item.role}</h3>
              <span>{item.company}</span>
            </header>
            <time>{item.period}</time>
            <p>{item.impact}</p>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

