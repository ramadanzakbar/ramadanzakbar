import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Sentient Mesh',
    year: '2025',
    description:
      'Platform orkestrasi agen AI terdistribusi yang bernegosiasi menggunakan smart contract dan oracle ReFi.',
    stack: ['Autonomous Agents', 'On-chain Governance', 'Graph Neural Networks'],
  },
  {
    title: 'Aurora Vault',
    year: '2024',
    description:
      'Infrastruktur keamanan dompet multi-biometrik dengan validasi zero-knowledge untuk transaksi DeFi L2.',
    stack: ['ZKP Circuits', 'Secure Enclave', 'Rust'],
  },
  {
    title: 'NeuroSight OS',
    year: '2023',
    description:
      'Dashboard taktis untuk pelatihan model generatif dengan visualisasi real-time vector search dan latency heatmap.',
    stack: ['WebGPU', 'LangChain', 'Realtime Telemetry'],
  },
];

export const Projects = () => (
  <section className="section projects" id="projects">
    <motion.div
      className="section__header"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7 }}
    >
      <p className="section__eyebrow">Kapsul proyek</p>
      <h2>Eksperimen yang menerobos batas interaksi manusia dan mesin</h2>
    </motion.div>

    <div className="projects__list">
      {projects.map((project, idx) => (
        <motion.article
          key={project.title}
          className="project-card"
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ delay: idx * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="project-card__overlay" />
          <header>
            <span className="project-card__year">{project.year}</span>
            <h3>{project.title}</h3>
          </header>
          <p>{project.description}</p>
          <ul>
            {project.stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  </section>
);

