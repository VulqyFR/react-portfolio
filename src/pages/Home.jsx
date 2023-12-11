import React from 'react'
import Navbar from '../components/header/Navbar'
import Console from '../components/common/Console/Console'

const Home = () => {
  return (
    <div style={{height: '100vh', position: 'relative'}}>
      <Navbar />
      <Console />
    </div>
  )
}

export default Home