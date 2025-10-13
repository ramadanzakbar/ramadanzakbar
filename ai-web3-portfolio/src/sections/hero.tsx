import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';

const BackgroundCanvas = lazy(() => import('../components/background-canvas'));

const heroVariants = {
  hidden: { opacity: 0, filter: 'blur(8px)', y: 40 },
  visible: { opacity: 1, filter: 'blur(0px)', y: 0 },
};

export const HeroSection = () => (
  <section
    id="hero"
    className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-24 pt-40 sm:px-10"
  >
    <div className="pointer-events-none absolute inset-0 -z-10">
      <Suspense fallback={<div className="h-full w-full bg-gradient-to-b from-night-900 via-night-800 to-night-900" />}>
        <BackgroundCanvas />
      </Suspense>
      <div className="absolute inset-0 bg-gradient-to-b from-night-900/80 via-night-900/60 to-night-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(157,114,255,0.18),_transparent_55%)]" />
    </div>
    <div className="relative z-10 flex w-full max-w-5xl flex-col items-start gap-8">
      <motion.span
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs uppercase tracking-[0.5em] text-neon-400 shadow-glow backdrop-blur"
      >
        AI Engineer • Web3 Futurist
      </motion.span>
      <motion.h1
        className="text-balance font-sans text-4xl font-semibold uppercase tracking-tight text-white drop-shadow-2xl sm:text-6xl md:text-7xl"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        RAMADANZAKBAR
      </motion.h1>
      <motion.p
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-xl text-pretty text-lg text-slate-200 sm:text-xl"
      >
        Memodelkan masa depan dengan kecerdasan terdistribusi. Saya merancang ekosistem AI dan
        protokol Web3 yang aman, adaptif, dan beretika untuk pengalaman manusia yang mendalam.
      </motion.p>
      <motion.div
        className="flex flex-wrap items-center gap-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.7 }}
      >
        <motion.a
          href="#projects"
          className="group relative inline-flex items-center overflow-hidden rounded-full border border-neon-500/50 bg-gradient-to-r from-neon-500/20 via-royal-500/30 to-purple-500/30 px-8 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-neon-400 shadow-glow"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="relative z-10">Explore Projects</span>
          <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-neon-500 via-royal-500 to-purple-500 opacity-70 transition group-hover:translate-y-0" />
        </motion.a>
        <motion.a
          href="#contact"
          className="inline-flex items-center rounded-full border border-white/20 px-8 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-white/90 transition hover:border-neon-500/60 hover:text-neon-400"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          Hire Me
        </motion.a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        className="mt-12 flex items-center gap-3 text-xs uppercase tracking-[0.5em] text-slate-400"
      >
        <span className="h-px w-12 bg-gradient-to-r from-transparent via-neon-500/60 to-transparent" />
        Scroll to explore the mission
        <span className="h-px w-12 bg-gradient-to-r from-transparent via-neon-500/60 to-transparent" />
      </motion.div>
    </div>
  </section>
);
