import { useState, useEffect } from 'react';

const useResponsiveFontSize = () => {
  const [fontSize, setFontSize] = useState('');

  useEffect(() => {
    const calculateFontSize = () => {
      const baseWidth = 1920;
      const screenWidth = window.innerWidth;
      const baseRem = 1;

      const calculatedFontSize = ((baseRem / baseWidth) * screenWidth).toFixed(2);

      setFontSize(calculatedFontSize + 'rem');
    };

    calculateFontSize();

    window.addEventListener('resize', calculateFontSize);

    return () => {
      window.removeEventListener('resize', calculateFontSize);
    };
  }, []);

  return {
    fontSize: fontSize 
  };
};

export default useResponsiveFontSize;