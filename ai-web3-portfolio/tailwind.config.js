/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono Variable"', '"JetBrains Mono"', 'monospace'],
      },
      colors: {
        night: {
          900: '#020409',
          800: '#04111b',
          700: '#081f2d',
        },
        neon: {
          400: '#43ffd1',
          500: '#18f5b1',
          600: '#0ecf97',
          700: '#0c9d70',
        },
        royal: {
          400: '#9f72ff',
          500: '#8257fe',
          600: '#5d38c9',
        },
      },
      backgroundImage: {
        'noise-soft':
          'radial-gradient(circle at 20% 20%, rgba(24, 245, 177, 0.18), transparent 55%), radial-gradient(circle at 80% 0%, rgba(157, 114, 255, 0.2), transparent 50%), radial-gradient(circle at 50% 80%, rgba(14, 207, 151, 0.15), transparent 60%)',
      },
      boxShadow: {
        glow: '0 0 35px rgba(24, 245, 177, 0.25)',
        'glass-lg': '0 35px 65px rgba(8, 23, 31, 0.45)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
