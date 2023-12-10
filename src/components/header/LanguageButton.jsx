import React from 'react';
import { useLanguageContext } from '../../hooks/useLanguageContext';
import { Globe } from 'react-feather';

const LanguageButton = ({ windowWidth, limitWidth }) => {
  const { language, changeLanguage } = useLanguageContext();

  const handleLanguageChange = () => {
    changeLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <button onClick={handleLanguageChange} className={` navbar__button ${windowWidth > limitWidth ? 'navbar__button--language' : 'navbar__button--language--screen'}`}>
      <Globe/>
    </button>
  );
};

export default LanguageButton;