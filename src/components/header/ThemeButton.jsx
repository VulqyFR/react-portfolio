import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "../../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const handleToggle = (toggleTheme) => {
  toggleTheme();
};

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <button
        onClick={() => handleToggle(toggleTheme)}
        className="navbar__button navbar__button--theme"
      >
        <div
          className={`navbar__button__circle navbar__button__circle--theme ${
            theme == "dark" ? "not-shifted" : "shifted"
          }`}
        >
          {theme === "light" ? (
            <Moon
              className={`navbar__button__icon--moon ${
                theme == "dark" ? "not-shifted" : "shifted"
              }`}
            />
          ) : (
            <Sun
              className={`navbar__button__icon--sun ${
                theme == "dark" ? "not-shifted" : "shifted"
              }`}
            />
          )}
        </div>
      </button>
    </>
  );
};

export default ThemeButton;
