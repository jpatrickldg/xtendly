import React from 'react'

const FormSection = () => {
  return (
    <section className='w-full xl:flex'>
      <div className='p-4 xl:p-8 flex flex-col items-center justify-center bg-accent-color text-white rounded-t-md xl:rounded-t-none xl:rounded-l-md relative'>
        <span className='font-semibold uppercase text-2xl md:text-3xl'>Schedule A Demo</span>
        <span className='font-medium md:text-xl'>Learn More About FloQast.</span>
        <div className='hidden 2xl:block border-[65px] border-x-[24px] border-accent-color border-r-transparent border-t-transparent border-b-transparent absolute -right-[48px]'>
        </div>
      </div>
      <div className="bg-white p-4 xl:px-6 xl:pl-11 flex-auto flex flex-col justify-center items-center gap-4 rounded-b-md xl:rounded-b-none xl:rounded-r-md">
        <div>
          <strong className='md:text-lg 2xl:text-[28px] text-center text-company-gray'>Learn How FloQast Can <span className='text-accent-color'>Improve Your Month-End</span></strong>
        </div>
        <form action="" className='flex flex-col 2xl:flex-row justify-center items-center gap-2 w-full'>
          <input type="text" name="firstName" id="firstName" placeholder='First Name⭑' required className='md:text-lg w-full border border-gray-300 rounded-md p-1.5 px-4 focus:outline-accent-color' />
          <input type="email" name="email" id="email" placeholder='Email⭑' required className='md:text-lg w-full border border-gray-300 rounded-md p-1.5 px-4 focus:outline-accent-color' />
          <input type="submit" value="Schedule Now" className='md:text-lg w-full uppercase font-medium border-2 border-dark-accent-color rounded-md p-1 px-6 bg-accent-color text-white hover:bg-dark-accent-color transition-all duration-150 focus:outline-dark-accent-color focus:bg-dark-accent-color cursor-pointer mt-2 2xl:mt-0' />
        </form>
      </div>
    </section>
  )
}

export default FormSection