import React from 'react'
import store from "../../assets/restaurant_store.jpg"


const About_Hero = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='xl:w-[1440px'>
        <div className='flex justify-between items-center gap-15 xl:gap-25 mt-8 md:mt-13 mx-10 lg:mx-20 xl:mx-30' >
          <div className='hidden lg:block'>
            <img src={store} alt='Restaurant-image' className='lg:h-130 lg:w-700 xl:h-130 xl:w-600' />
          </div>
          <div className=''>
            <div className='flex flex-col justify-between items-start gap-3 xl:gap-5 p-2 xl:p-8'>
              <p className='text-[#FB8A22] text-[16px]  md:text-[18px] Inter-SemiBold'>About Our Restaurant</p>
              <h3 className='text-[20px] md:text-[25px] Inter-Bold'>We Provide Good Food For Your Family!</h3>
              <p className=' text-[14px] Inter-Regular leading-6 md:leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.</p>
              <p className=' text-[14px] Inter-Regular leading-6 md:leading-7'>Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.</p>
              <div className='flex justify-between items-center'>
                <button className='bg-[#FB8A22] rounded-[37px] px-4 py-2 md:px-6 md:py-3 text-white text-[14px] md:text-[14px] lg:text-[16px]  Inter-SemiBold'>Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About_Hero
