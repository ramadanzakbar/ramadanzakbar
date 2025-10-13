import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState } from 'react';
import { SectionHeading } from '../components/section-heading';

const PROJECTS = [
  {
    title: 'Sentient Mesh',
    year: '2025',
    description:
      'Platform orkestrasi agen AI terdistribusi yang menyusun kontrak cerdas adaptif dengan oracle ReFi dan pemantauan etika real-time.',
    stack: ['Autonomous agents', 'On-chain governance', 'Graph neural networks'],
  },
  {
    title: 'Aurora Vault',
    year: '2024',
    description:
      'Arsitektur keamanan dompet biometrik multi-modal dengan validasi zero-knowledge untuk transaksi DeFi layer-2.',
    stack: ['ZKP circuits', 'Secure enclave', 'Rust'],
  },
  {
    title: 'NeuroSight OS',
    year: '2023',
    description:
      'Dashboard taktis untuk melatih model generatif disertai visualisasi vector search dan latency heatmap secara instan.',
    stack: ['WebGPU', 'LangChain', 'Realtime telemetry'],
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
}) => {
  const [hovered, setHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-50, 50], [15, -15]), { stiffness: 100, damping: 12 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-20, 20]), {
    stiffness: 100,
    damping: 12,
  });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    x.set(offsetX);
    y.set(offsetY);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      key={project.title}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        reset();
      }}
      style={{ rotateX, rotateY }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group relative h-full transform-gpu overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-[1px] shadow-2xl"
    >
      <div className="relative flex h-full flex-col gap-6 rounded-[calc(1.5rem-1px)] bg-black/40 p-8 backdrop-blur-2xl transition-colors duration-300 group-hover:bg-black/55 dark:bg-black/50">
        <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute -inset-[120%] bg-[conic-gradient(from_140deg_at_50%_50%,rgba(24,245,177,0.2),rgba(157,114,255,0.15),transparent)] blur-3xl" />
        </div>
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-neon-400">
            {project.year}
          </span>
          <motion.span
            layout
            className={`rounded-full px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.4em] ${
              hovered ? 'bg-neon-500/20 text-neon-300' : 'border border-white/10 text-slate-300'
            }`}
          >
            Capsule
          </motion.span>
        </div>
        <h3 className="text-2xl font-semibold uppercase tracking-[0.12em] text-white">
          {project.title}
        </h3>
        <p className="text-sm text-slate-300">{project.description}</p>
        <div className="mt-auto flex flex-wrap gap-3 text-[0.7rem] uppercase tracking-[0.35em] text-slate-200">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-black/30 px-3 py-1 transition group-hover:border-neon-500/60 group-hover:text-neon-400"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export const ProjectsSection = () => (
  <section id="projects" className="scroll-mt-28 space-y-16 px-6 py-24 sm:px-10">
    <SectionHeading
      eyebrow="Projects"
      subtitle="Eksperimen yang menerobos batas interaksi manusia dan mesin untuk dunia terdesentralisasi."
    >
      Kapsul inovasi yang mendorong otonomi digital
    </SectionHeading>

    <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 xl:grid-cols-3">
      {PROJECTS.map((project, index) => (
        <ProjectCard key={project.title} project={project} index={index} />
      ))}
    </div>
  </section>
);
