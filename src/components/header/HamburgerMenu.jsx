import React from 'react'

const HamburgerMenu = ( {languageData} ) => {
  if (window.innerWidth > 1024) return null;
  return (
    <>
    <ul>
        <li>Home</li>
        <li>Projects</li>
        <li>Technology Watch</li>
        <li>Curiculum Vitae</li>
        <li>Training Period</li>
        <li>Certification</li>
    </ul>
    </>
  )
}

export default HamburgerMenu