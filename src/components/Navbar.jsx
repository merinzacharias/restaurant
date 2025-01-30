import React from 'react'
import cart from "../assets/cart.png"
import dish from "../assets/dish.png"

import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header className='relative bg-[#F6F7FF]'>
      <div className='mx-0 sm:mx-8 md:mx-12 xl:mx-30 flex justify-between gap-10 items-center right-0 left-0 top-0 py-4 px-4 md:px-6 xl:px-8'>
        <Link to="/">
          <div className='flex justify-between items-center gap-1 md:gap-2 xl:gap-3'>

            <img src={dish} alt='logo' className='h-10 md:h-14 xl:h-18 w-[100%]' />
            <h3 className='text-[18px] md:text-[22px] lg:text-[25px] pt-2 Inter-Bold'>FOOD</h3>
          </div>
        </Link>

        <div>

          <nav className=' justify-between items-center gap-10 space-x-10 Inter-SemiBold hidden lg:flex'>
            <div className='flex flex-col gap-1'>
              <Link to="/">
                <p className='text-[18px] text-black'>Home</p>
              </Link>
              <div class="border border-[#FB8A22] w-13"></div>
            </div>
            <Link to="/about">
              <p className=' text-[18px] text-[#A4A9AC]'>About</p>
            </Link>
            <Link to="/product"><p className=' text-[18px] text-[#A4A9AC]'>Products</p>
            </Link>
            <Link to="/contact">
              <p className=' text-[18px] text-[#A4A9AC]'>Contact US</p>
            </Link>
          </nav>
        </div>



        <div className='hidden lg:flex justify-between items-center relative '>
          <div className='w-10 pt-3'>
            <div class="w-4 h-4 rounded-full bg-red-500 left-4 top-1 absolute flex justify-center items-center">
              <p className='text-[13px] text-white'>4</p>
            </div>
            <img src={cart} alt='cart-icon' className='h-6 ' />

          </div>
        </div>

        <div className='lg:hidden flex flex-col gap-1'>
          <div className='border w-9 '></div>
          <div className='border w-9 '></div>
          <div className='border w-9 '></div>
        </div>




      </div>
    </header>

  )
}

export default Navbar
