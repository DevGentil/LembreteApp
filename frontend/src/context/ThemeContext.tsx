// ThemeContext.tsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../components/ui/GlobalStyle';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(localStorage.getItem('theme') as Theme || 'dark');

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
