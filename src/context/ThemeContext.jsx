import React, { useState, useEffect, createContext, useContext } from 'react';
const ThemeContext = createContext();

function useTheme() {
  return useContext(ThemeContext);
}

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('dark');
  
    useEffect(() => {
      const body = document.body;
      body.classList.remove('light', 'dark');
      body.classList.add(theme);
    }, [theme]);

    const toggleTheme = () => {
      setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };
  
    const value = {
      theme,
      toggleTheme,
    };
  
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
  }

export { ThemeProvider, useTheme };