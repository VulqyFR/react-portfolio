import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export const useLanguageContext = () => {
  const { language, languageData, changeLanguage } = useContext(LanguageContext);
  return { language, languageData, changeLanguage };
};

export default useLanguageContext;
