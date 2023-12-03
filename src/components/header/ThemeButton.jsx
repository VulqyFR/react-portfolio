import React from 'react'
import { useTheme } from '../../context/ThemeContext';

const ThemeButton = () => {
    const { theme, toggleTheme } = useTheme();
  
    const handleToggle = () => {
      toggleTheme();
    };
  
    return (
      <button onClick={handleToggle}>
        Toggle Theme ({theme === 'light' ? 'Dark' : 'Light'})
      </button>
    );
  }

export default ThemeButton