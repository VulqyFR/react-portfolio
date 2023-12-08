import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export const useLanguage = () => {
  const { language, languageData, changeLanguage } = useContext(LanguageContext);
  return { language, languageData, changeLanguage };
};
