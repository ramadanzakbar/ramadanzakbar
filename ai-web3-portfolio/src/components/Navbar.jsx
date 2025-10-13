import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const navItems = [
  { label: 'Stack', href: '#stack' },
  { label: 'Proyek', href: '#projects' },
  { label: 'Pengalaman', href: '#experience' },
  { label: 'Kontak', href: '#contact' },
];

export const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, bounce: 0 });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 48);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#" className="nav__brand">
          <span className="nav__pulse" />
          RAMADANZAKBAR<span>.</span>AI
        </a>
        <nav>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="mailto:ai@ramadanzakbar.dev" className="btn btn--tiny">Hire</a>
      </div>
      <motion.div className="nav__progress" style={{ scaleX }} />
    </header>
  );
};

