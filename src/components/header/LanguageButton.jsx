import React from 'react'
import { useLanguage } from '../../context/LanguageContext';

const LanguageButton = () => {
  const { language, changeLanguage } = useLanguage();
  const handleLanguageChange = () => {
    if (language === 'en') {
      changeLanguage('fr');
    } else {
      changeLanguage('en');
    }
  }
  return (
    <button onClick={handleLanguageChange}>Changer de langue</button>
  )
}

export default LanguageButton;
