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
    <header style={backgroundImageStyle} className="relative font-roboto h-screen p-4 py-16 md:p-16 md:py-24 xl:px-80 flex justify-center items-end">
      <Tagline />
      <FormSection />
    </header>
  )
}

export default Header