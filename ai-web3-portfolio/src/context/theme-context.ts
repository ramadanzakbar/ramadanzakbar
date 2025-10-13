import { createContext } from 'react';

type ThemeMode = 'dark' | 'light';

type ThemeContextValue = {
  theme: ThemeMode;
  toggle: () => void;
  setTheme: (mode: ThemeMode) => void;
};

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
export type { ThemeContextValue, ThemeMode };

