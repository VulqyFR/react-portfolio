import { useEffect, useState, React } from 'react'
import LinkMenu from './LinkMenu';
import LanguageButton from './LanguageButton';
import ThemeButton from './ThemeButton';
import ContactButton from './ContactButton';
import { useLanguage } from '../../hooks/useLanguage';
import HamburgerMenu from './HamburgerMenu';

const Navbar = () => { 
  const { languageData } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

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
            <LinkMenu languageData={languageData}/>
            <div className="navbar__buttons">
                <ThemeButton/>
                <LanguageButton/>
                <ContactButton languageData={languageData}/>
                <HamburgerMenu languageData={languageData}/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar