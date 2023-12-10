import React from 'react'

const ContactButton = ({ languageData, windowWidth }) => {
    return (
      <>
      {windowWidth > 1024 && (
        <button className='navbar__button navbar__button--contact'>{languageData.navbar.contact}</button>
      )}
      </>
  )
}

export default ContactButton