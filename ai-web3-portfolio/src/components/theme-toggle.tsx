import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/use-theme';

export const ThemeToggle = () => {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      type="button"
      onClick={toggle}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white shadow-glow transition hover:border-neon-500/70 hover:text-neon-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black dark:bg-white/5 dark:text-white dark:hover:text-neon-400"
      whileTap={{ scale: 0.9 }}
      aria-label={isDark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'}
    >
      <motion.span
        key={theme}
        initial={{ opacity: 0, rotate: -20, scale: 0.4 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        exit={{ opacity: 0, rotate: 20, scale: 0.7 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="absolute"
      >
        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </motion.span>
    </motion.button>
  );
};
