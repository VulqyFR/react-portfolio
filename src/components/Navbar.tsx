import { useState } from "react";
import { Globe, Menu, Moon } from "react-feather";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__links">
          <div className="navbar__logo-container">
            <a href="/" className="navbar__logo">
              <h1>&lt;&gt; ELVIN CHAUVEL</h1>
            </a>
          </div>
          <div className="navbar__link-container">
            <a href="/" className="navbar__link">
              Home
            </a>
            <a href="/" className="navbar__link">
              Projects
            </a>
            <a href="/" className="navbar__link">
              Internship
            </a>
            <a href="/" className="navbar__link">
              Technology Watch
            </a>
            <a href="/" className="navbar__link">
              Curiculum Vitae
            </a>
            <a href="/" className="navbar__link">
              Internship
            </a>
            <a href="/" className="navbar__link">
              Certifications
            </a>
          </div>
        </div>
        <div className="navbar__buttons">
          <a className="navbar__button navbar__button-theme">
            <div className="navbar__button--theme-circle">
              <Moon />
            </div>
          </a>
          <button className="navbar__button navbar__button-lang">
            <Globe />
          </button>
          <button className="navbar__button navbar__button-contact">
            Contact
          </button>
        </div>
        <button
          className="navbar__button navbar__button-hamburger"
          onClick={toggleMenu}
        >
          <Menu />
        </button>
        {isOpen && <nav></nav>}
      </div>
    </nav>
  );
};

export default Navbar;
