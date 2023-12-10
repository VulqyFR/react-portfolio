import React, { useState } from 'react';
import { Menu } from 'react-feather';
import Button from '../common/Button';
import { X } from 'react-feather';

const HamburgerMenu = ({ languageData, windowWidth, limitWidth }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      {windowWidth <= limitWidth && (
        <>
          <button onClick={handleClick} className="navbar__button navbar__button--hamburger">
            <Menu className="navbar__button__icon navbar__button__icon--hamburger" />
          </button>
          {isMenuOpen && (
            <div className='navbar__submenu--wrapper'>
              <div className='navbar__submenu'>
                <div className='navbar__submenu__header--container'>
                  <h2 className="navbar__logo-text">ELVIN CHAUVEL.</h2>
                  <button className='navbar__close-button' onClick={handleClick}>
                    <X className='navbar__close-button__icon' />
                  </button>
                </div>
                <ul className='navbar__submenu-list'>
                  <li className='navbar__submenu-list-link'>{languageData.navbar.home}</li>
                  <li className='navbar__submenu-list-link'>{languageData.navbar.projects}</li>
                  <li className='navbar__submenu-list-link'>{languageData.navbar.technology_watch}</li>
                  <li className='navbar__submenu-list-link'>{languageData.navbar.curiculum_vitae}</li>
                  <li className='navbar__submenu-list-link'>{languageData.navbar.training_period}</li>
                  <li className='navbar__submenu-list-link'>{languageData.navbar.certification}</li>
                </ul>
                <Button>Contact</Button>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default HamburgerMenu;