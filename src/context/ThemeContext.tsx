import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import { Theme } from '@/types';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const getInitialTheme = (): Theme => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('theme');
    if (saved && Object.values(Theme).includes(saved as Theme)) {
      return saved as Theme;
    }
  }
  return Theme.LIGHT;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => {
      const newTheme = current === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

      document.body.classList.remove(current);
      document.body.classList.add(newTheme);
      localStorage.setItem('theme', newTheme);

      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
