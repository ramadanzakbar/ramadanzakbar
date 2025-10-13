import { CalendarDays, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/section-heading';

export const ContactSection = () => (
  <section id="contact" className="scroll-mt-28 space-y-16 px-6 py-24 sm:px-10">
    <SectionHeading
      eyebrow="Contact"
      subtitle="Saya terbuka untuk kolaborasi riset, venture baru, atau konsultasi strategi pengembangan AI terdesentralisasi."
    >
      Let’s build the future together
    </SectionHeading>

    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-gradient-to-br from-neon-500/10 via-black/40 to-purple-500/15 p-10 text-center shadow-2xl backdrop-blur-xl"
    >
      <p className="text-pretty text-base text-slate-200 sm:text-lg">
        Bawa ide atau tantanganmu ke meja. Saya membantu tim untuk menyatukan pipeline AI, desain
        produk, dan struktur Web3 agar lahir pengalaman yang tepercaya.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href="mailto:ai@ramadanzakbar.dev"
          className="inline-flex items-center gap-2 rounded-full border border-neon-500/60 bg-neon-500/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-neon-300 shadow-glow transition hover:bg-neon-500/20"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          Hire Me
        </a>
        <a
          href="https://cal.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white transition hover:border-neon-500/50 hover:text-neon-300"
        >
          <CalendarDays className="h-4 w-4" aria-hidden="true" />
          Schedule a Call
        </a>
      </div>
    </motion.div>
  </section>
);
