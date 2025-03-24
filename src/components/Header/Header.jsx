import React from 'react'
import NavBar from './NavBar/NavBar'
import HeroSection from './HeroSection/HeroSection'
import Partners from './Partners/Partners'

const Header = () => {

  const style = {marginTop: '2.5em'}

  return (
    <div className="container">
        <div style={style}>
            <NavBar />
            <HeroSection />
            <Partners />
        </div>
    </div>
  )
}

export default Header