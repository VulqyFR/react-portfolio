import React, { useEffect, useState } from 'react';
import LinkMenu from './LinkMenu';
import LanguageButton from './LanguageButton';
import ThemeButton from './ThemeButton';
import ContactButton from './ContactButton';
import useLanguageContext from '../../hooks/useLanguageContext';
import HamburgerMenu from './HamburgerMenu';
import useWindowSize from '../../hooks/useWindowSize';

const Navbar = () => {
  const { languageData } = useLanguageContext();
  const [scrolled, setScrolled] = useState(false);
  const windowWidth = useWindowSize();
  const SCREEN_SIZE_THRESHOLD = 1024;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar__container">
        <div className="navbar__logo">
          <h3 className="navbar__logo-text">ELVIN CHAUVEL.</h3>
        </div>
        <LinkMenu languageData={languageData} windowWidth={windowWidth} limitWidth={SCREEN_SIZE_THRESHOLD}/>
        <div className="navbar__buttons">
          <ThemeButton windowWidth={windowWidth} limitWidth={SCREEN_SIZE_THRESHOLD}/>
          <LanguageButton windowWidth={windowWidth} limitWidth={SCREEN_SIZE_THRESHOLD}/>
          <ContactButton languageData={languageData} windowWidth={windowWidth} limitWidth={SCREEN_SIZE_THRESHOLD}/>
          <HamburgerMenu languageData={languageData} windowWidth={windowWidth} limitWidth={SCREEN_SIZE_THRESHOLD}/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;