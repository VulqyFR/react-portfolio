import React, { useState } from "react";
import ButtonContact from "../common/Buttons";
import { Menu, X } from "lucide-react";

const HamburgerMenu = ({ languageData, isMobileView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      {isMobileView && (
        <>
          <button
            onClick={handleClick}
            className="navbar__button navbar__button--hamburger"
          >
            <Menu className="navbar__button__icon navbar__button__icon--hamburger" />
          </button>
          {isMenuOpen && (
            <div className="navbar__submenu--wrapper">
              <div className="navbar__submenu">
                <div className="navbar__submenu__header--container">
                  <h2 className="navbar__logo-text">ELVIN CHAUVEL.</h2>
                  <button
                    className="navbar__close-button"
                    onClick={handleClick}
                  >
                    <X className="navbar__close-button__icon" />
                  </button>
                </div>
                <ul className="navbar__submenu-list">
                  <li className="navbar__submenu-list-link">
                    {languageData.navbar.home}
                  </li>
                  <li className="navbar__submenu-list-link">
                    {languageData.navbar.projects}
                  </li>
                  <li className="navbar__submenu-list-link">
                    {languageData.navbar.technology_watch}
                  </li>
                  <li className="navbar__submenu-list-link">
                    {languageData.navbar.curiculum_vitae}
                  </li>
                  <li className="navbar__submenu-list-link">
                    {languageData.navbar.training_period}
                  </li>
                  <li className="navbar__submenu-list-link">
                    {languageData.navbar.certification}
                  </li>
                </ul>
                <ButtonContact>Contact</ButtonContact>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default HamburgerMenu;
