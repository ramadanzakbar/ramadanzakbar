import { motion, useScroll, useSpring } from 'framer-motion';
import { useMemo } from 'react';
import { useScrollSpy } from '../hooks/use-scrollspy';
import Logo from './site-logo';
import { ThemeToggle } from './theme-toggle';

const NAV_ITEMS = [
  { label: 'AI Stack', href: '#stack', id: 'stack' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const Navbar = () => {
  const sectionIds = useMemo(() => ['hero', ...NAV_ITEMS.map((item) => item.id)], []);
  const activeId = useScrollSpy(sectionIds);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 28, mass: 0.3 });

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 rounded-full border border-white/10 bg-black/40 px-6 py-4 backdrop-blur-lg transition-colors duration-300 dark:border-white/10 dark:bg-black/40">
        <a href="#hero" className="flex items-center gap-3" aria-label="Ramadanzakbar logo">
          <Logo className="h-10 w-auto" />
          <div className="hidden flex-col leading-none sm:flex">
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-neon-500">
              RamadanZakbar
            </span>
            <span className="text-sm text-slate-300">AI Engineer · Web3 Futurist</span>
          </div>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.href}
                href={item.href}
                className="relative inline-flex flex-col items-center uppercase tracking-[0.22em] text-slate-300 transition hover:text-neon-400"
              >
                <span>{item.label}</span>
                <motion.span
                  layoutId="active-pill"
                  className="mt-2 h-[2px] w-full rounded-full bg-gradient-to-r from-neon-400 via-royal-500 to-purple-500"
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0, scaleX: isActive ? 1 : 0.1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-neon-500/40 bg-neon-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-neon-400 shadow-glow transition hover:bg-neon-500/20 md:inline-flex"
          >
            Hire
          </a>
          <ThemeToggle />
        </div>
      </div>
      <motion.div
        style={{ scaleX }}
        className="mx-auto mt-3 h-[2px] w-full max-w-4xl origin-left rounded-full bg-gradient-to-r from-transparent via-neon-400/60 to-transparent"
      />
    </header>
  );
};
