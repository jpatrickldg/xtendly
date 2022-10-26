import React from 'react'
import logo from '../images/logo.png'

const Tagline = () => {
  return (
    <section className='relative p-6 py-16 md:px-16 md:py-10 xl:py-12 xl:pl-80 xl:mt-28 flex flex-col items-start xl:gap-2'>
      <div className='absolute inset-0 bg-gradient-to-r from-white via-white opacity-50 lg:opacity-80'></div>
      <div className="flex flex-col xl:flex-row items-start xl:items-end gap-6 md:gap-10 xl:gap-4 z-10">
        <img src={logo} alt="logo" className='inline-block pb-1 md:h-24' />
        <span className='text-3xl md:text-[42px] text-company-dark-gray tracking-tighter italic'>The</span>
      </div>
      <div className='xl:flex xl:gap-4 z-10'>
        <span className='block text-5xl md:text-6xl text-accent-color font-semibold italic'>Fastest,</span>
        <span className='block text-5xl md:text-6xl text-accent-color font-semibold italic'>Most Accurate</span>
      </div>
      <div className='z-10'>
        <span className='block text-3xl md:text-[42px] text-company-dark-gray tracking-tighter italic'>Way to Close Your Books!</span>
      </div>
    </section>
  )
}

export default Tagline