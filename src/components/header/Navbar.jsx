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
          <h3 className="navbar__logo-text">Elvin Chauvel.</h3>
        </div>
        <LinkMenu languageData={languageData} windowWidth={windowWidth} />
        <div className="navbar__buttons">
          <ThemeButton />
          <LanguageButton />
          <ContactButton languageData={languageData} />
          <HamburgerMenu languageData={languageData} windowWidth={windowWidth} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;