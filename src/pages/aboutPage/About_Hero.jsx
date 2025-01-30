import React from 'react'
import store from "../../assets/restaurant_store.jpg"


const About_Hero = () => {
  return (
    <div className='flex justify-between  items-center gap-25 mt-13 mx-30' >
        <div className='flex'>
          <img src={store} alt='Restaurant-image' className='h-130 w-600' />
        </div>
        <div className=''>
          <div className='flex flex-col justify-between items-start gap-5 p-8'>
            <p className='text-[#FB8A22] text-[18px] Inter-SemiBold'>About Our Restaurant</p>
            <h3 className=' text-[25px] Inter-Bold'>We Provide Good Food For Your Family!</h3>
            <p className=' text-[14px] Inter-Regular leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
              qui officia deserunt mollit anim id est laborum.</p>
            <p className=' text-[14px] Inter-Regular leading-7'>Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.</p>
            <div className='flex justify-between items-center'>
              <button className='bg-[#FB8A22] rounded-[37px] px-4 py-2 md:px-6 md:py-3  lg:px-6 lg:py-3 text-white text-[14px] md:text-[14px] lg:text-[16px]  Inter-SemiBold'>Learn More</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default About_Hero
