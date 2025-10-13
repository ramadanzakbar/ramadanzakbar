import { Github, Linkedin, Twitter } from 'lucide-react';

const links = [
  { href: 'https://github.com', label: 'GitHub', Icon: Github },
  { href: 'https://linkedin.com', label: 'LinkedIn', Icon: Linkedin },
  { href: 'https://x.com', label: 'X / Twitter', Icon: Twitter },
];

export const Footer = () => (
  <footer className="border-t border-white/10 px-6 py-12 sm:px-10">
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
      <div className="space-y-1 font-mono uppercase tracking-[0.35em]">
        <p>© 2025 Ramadanzakbar</p>
        <p>Kode yang disusun dengan etika dan eksplorasi masa depan.</p>
      </div>
      <nav className="flex items-center gap-4">
        {links.map(({ href, label, Icon }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/80 transition hover:border-neon-500/60 hover:text-neon-400"
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
            {label}
          </a>
        ))}
      </nav>
    </div>
  </footer>
);
