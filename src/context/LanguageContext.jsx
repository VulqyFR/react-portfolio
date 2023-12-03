import { createContext, useState, useContext, useEffect } from 'react';
import enData from '../lang/en.json'; 
import frData from '../lang/fr.json'; 

const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [languageData, setLanguageData] = useState(enData);

  useEffect(() => {
    if (language === 'en') {
      setLanguageData(enData);
    } else {
      setLanguageData(frData);
    }
  }, [language]);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, languageData, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};