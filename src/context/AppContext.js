// context/AppContext.js
import { createContext, useContext, useState } from 'react';

// PageTitleContext
const PageTitleContext = createContext();
export function usePageTitle() {
  return useContext(PageTitleContext);
}

export function PageTitleProvider({ children }) {
  const [title, setTitle] = useState('Home');
  return (
    <PageTitleContext.Provider value={{ title, setTitle }}>
      {children}
    </PageTitleContext.Provider>
  );
}

// ThemeContext
const ThemeContext = createContext();
export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
