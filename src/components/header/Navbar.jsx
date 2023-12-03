import React from 'react'
import { useLanguage } from '../../context/LanguageContext';
import LanguageButton from './LanguageButton';
import ThemeButton from './ThemeButton';
import ContactButton from './ContactButton';

const Navbar = () => { 
  const { languageData } = useLanguage();
  return (
    <nav className="navbar">
        <div className="navbar__container">
            <div className="navbar__logo">
                <h3 className="navbar__logo-text">Elvin Chauvel</h3>
            </div>
            <ul className="navbar__menu">
                <li className="navbar__menu-item">
                    <a href="#" className="navbar__menu-link" id="#">{languageData.navbar.home}</a>
                </li>
                <li className="navbar__menu-item">
                    <a href="#" className="navbar__menu-link" id="#">{languageData.navbar.projects}</a>
                </li>
                <li className="navbar__menu-item">
                    <a href="#" className="navbar__menu-link" id="#">{languageData.navbar.technology_watch}</a>
                </li>
                <li className="navbar__menu-item">
                    <a href="#" className="navbar__menu-link" id="#">{languageData.navbar.curiculum_vitae}</a>
                </li>
                <li className="navbar__menu-item">
                    <a href="#" className="navbar__menu-link" id="#">{languageData.navbar.training_period}</a>
                </li>
                <li className="navbar__menu-item">
                    <a href="#" className="navbar__menu-link" id="#">{languageData.navbar.certification}</a>
                </li>
            </ul>
            <div className="navbar__buttons">
                <ThemeButton/>
                <LanguageButton/>
                <ContactButton>Contact</ContactButton>
            </div>
        </div>
    </nav>
  )
}

export default Navbar