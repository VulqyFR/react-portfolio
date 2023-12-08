import React from 'react'

const ContactButton = ({ languageData }) => {
    return (
    <button className='navbar__button navbar__button--contact'>{languageData.navbar.contact}</button>
  )
}

export default ContactButton