import React from 'react';

const HamburgerMenu = ({ languageData, windowWidth }) => {
  const SCREEN_SIZE_THRESHOLD = 1024;
  return (
    <>
      {windowWidth <= SCREEN_SIZE_THRESHOLD && (
        <ul>
          <li>{languageData.navbar.home}</li>
          <li>{languageData.navbar.projects}</li>
          <li>{languageData.navbar.technology_watch}</li>
          <li>{languageData.navbar.curiculum_vitae}</li>
          <li>{languageData.navbar.training_period}</li>
          <li>{languageData.navbar.certification}</li>
        </ul>
      )}
    </>
  );
};

export default HamburgerMenu;
