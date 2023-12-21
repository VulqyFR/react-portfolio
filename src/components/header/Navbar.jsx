import React, { useEffect, useState } from "react";
import LinkMenu from "./LinkMenu";
import LanguageButton from "./LanguageButton";
import ThemeButton from "./ThemeButton";
import ContactButton from "./ContactButton";
import useLanguageContext from "../../hooks/useLanguageContext";
import SubMenu from "./SubMenu";

const Navbar = ({ isMobileView }) => {
  const { languageData } = useLanguageContext();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar__container">
        <div className="navbar__logo">
          <h3 className={`navbar__logo-text ${isMobileView ? "mobile" : ""}`}>
            ELVIN CHAUVEL.
          </h3>
        </div>
        <LinkMenu languageData={languageData} isMobileView={isMobileView} />
        <div className="navbar__buttons">
          <ThemeButton />
          <LanguageButton isMobileView={isMobileView} />
          <ContactButton
            languageData={languageData}
            isMobileView={isMobileView}
          />
          <SubMenu languageData={languageData} isMobileView={isMobileView} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
