import React from 'react'

const ContactButton = ({children}) => {
    return (
    <button className='navbar__button navbar__button--contact'>{children}</button>
  )
}

export default ContactButton