import React from 'react'

const LinkMenu = ({ languageData }) => {
  if (window.innerWidth < 1024) return null;
  return (
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
  )
}

export default LinkMenu