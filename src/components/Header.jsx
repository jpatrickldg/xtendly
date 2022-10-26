import React from 'react'
import Tagline from './Tagline'
import FormSection from './FormSection'
import backgroundImage from '../images/bg.png'

const Header = () => {
  const backgroundImageStyle = {
    backgroundImage: `url("${backgroundImage}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  }

  return (
    <header style={backgroundImageStyle} className="relative font-roboto h-screen py-8 md:py-24 xl:py-16 flex flex-col justify-between items-start">
      <Tagline />
      <FormSection />
    </header>
  )
}

export default Header