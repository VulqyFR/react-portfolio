import { React} from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon } from 'react-feather';

const ThemeButton = ({ windowWidth, limitWidth }) => {
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <>
    {windowWidth > limitWidth && (
      <button onClick={handleToggle} className="navbar__button navbar__button--theme">
        <div className={`navbar__button__circle navbar__button__circle--theme ${theme == 'dark' ? 'not-shifted' : 'shifted'}`}>
          {theme === 'light' ? (
            <Moon className={`navbar__button__icon--moon ${theme == 'dark' ? 'not-shifted' : 'shifted'}`}/>
          ) : (
            <Sun className={`navbar__button__icon--sun ${theme == 'dark' ? 'not-shifted' : 'shifted'}`}/>
          )}
        </div>
      </button>
    )}
    </>
  );
};

export default ThemeButton;