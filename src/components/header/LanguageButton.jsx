import React, { useState, useCallback } from "react";
import { useLanguageContext } from "../../hooks/useLanguageContext";
import { Globe } from "react-feather";

const LanguageButton = ({ isMobileView }) => {
  const { language, changeLanguage } = useLanguageContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
  }, []);

  return (
    <>
      <button
        onClick={handleClick}
        className={`navbar__button ${
          isMobileView
            ? "navbar__button--language--screen"
            : "navbar__button--language"
        }`}
      >
        <Globe />
        {isMenuOpen && (
          <div className="navbar__langmenu--wrapper">
            <ul className="navbar__langmenu-list">
              <a
                onClick={() => changeLanguage("en")}
                className="navbar__langmenu-list-link"
              >
                <li>ENGLISH (EN)</li>
              </a>
              <a
                onClick={() => changeLanguage("fr")}
                className="navbar__langmenu-list-link"
              >
                <li>FRANÇAIS (FR)</li>
              </a>
            </ul>
          </div>
        )}
      </button>
    </>
  );
};

export default LanguageButton;
