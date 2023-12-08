import { useState, React} from 'react';
import { useTheme } from '../../context/ThemeContext';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();
  const [isShifted, setIsShifted] = useState(false);

  const handleToggle = () => {
    toggleTheme();
    setIsShifted(!isShifted);
  };

  return (
    <button onClick={handleToggle} className={`navbar__button navbar__button--theme ${isShifted ? 'shifted' : 'not-shifted'}`}>
      <div className='navbar__button-circle'>
        {theme === 'light' ? (
          <MoonIcon className='navbar__button-icon navbar__button-icon-moon'/>
        ) : (
          <SunIcon className='navbar__button-icon navbar__button-icon-sun'/>
        )}
      </div>
    </button>
  );
};

export default ThemeButton;