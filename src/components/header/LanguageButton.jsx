import React, { useState } from 'react';
import { useLanguageContext } from '../../hooks/useLanguageContext';
import { Globe } from 'react-feather';

const LanguageButton = ({ windowWidth, limitWidth }) => {
  const { language, changeLanguage } = useLanguageContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
    <button onClick={handleClick} className={` navbar__button ${windowWidth > limitWidth ? 'navbar__button--language' : 'navbar__button--language--screen'}`}>
      <Globe/>
      {isMenuOpen && (
      <div className='navbar__langmenu--wrapper'>
          <ul className='navbar__langmenu-list'>
            <a onClick={() => changeLanguage('en')} className='navbar__langmenu-list-link'><li>ENGLISH (EN)</li></a>
            <a onClick={() => changeLanguage('fr')} className='navbar__langmenu-list-link'><li>FRANÇAIS (FR)</li></a>
          </ul>
      </div>
    )}
    </button>
    </>
  );
};

export default LanguageButton;