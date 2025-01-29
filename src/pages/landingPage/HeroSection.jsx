import React from 'react'
import salmon from "../../assets/salmon_dish.png"
import like from "../../assets/like_icon.png"
import chickenfry from "../../assets/chicken_fry.png"
import orange from "../../assets/orange image 1.png"
import pasta from "../../assets/pasta2.png"





const HeroSection = () => {
  return (
     <section className='relative pt-8 sm:pt-10 md:pt-12 lg:pt:14 xl:pt-16'>
            <img src={orange} alt='orange-image' className='h-35 sm:h-40 md:h-40 lg:60 xl:h-70 right-0 absolute top-0' />
            <div className='flex flex-col md:flex-row items-start xl:items-center md:gap-1 lg:gap-10 xl:gap-15'>
              <div className='ml-4 sm:ml-8 md:ml-16 xl:ml-38 w-[85%] md:w-[75%] lg:w-[60%] xl:w-[73%] '>
                <button className='bg-[#FAE8DC] text-[#FB8A22] px-2 py-1 md:px-2 md:py-2 rounded-[5px] text-[14px] md:text-[15px] xl:text-[18px] Inter-Regular'>WELCOME TO OUR RESTAURANT</button>
                <h1 className=' text-[30px] sm:text-[30px] md:text-[40px] lg:text-[45px] xl:text-[71px] pb-5 xl:pb-10 Inter-SemiBold pt-3 xl:pt-0'>Delicious Foods For Every Occasion And Festival</h1>
                <h1 className=' text-[16px]  md:text-[18px] lg:text-[18px] xl:text-[20px] text-[#646573] pb-6 Inter-Medium w-[90%]'>Delicious Foods For Every Occasion And Festival Delicious Foods For Every Occasion And Festival</h1>
                <button className='bg-[#FB8A22] rounded-[37px] px-3 py-2 md:px-6 md:py-3  xl:px-8 xl:py-4 text-white text-[14px] md:text-[14px] lg:text-[18px] xl:text-[20px] Inter-SemiBold'>Order Now</button>
              </div>
    
              <div className='w-[60%] md:w-[65%] lg:w-[70%] relative md:h-[450px] lg:h-[550px] xl:h-[750px] hidden md:block'>
                <img src={salmon} alt='salmon-dish' className='hidden md:flex pt-0 md:h-70 lg:h-100 lg:pl-7 xl:h-140 absolute z-10' />
    
                <div className="bg-white rounded-[35px] shadow-2xl md:p-3 lg:p-4 md:w-45 lg:w-58 xl:w-60 text-center z-20 bottom-1 md:right-5 lg:right-15 xl:left-0 absolute ">
                  <div className="flex justify-center bg-[#ECEFF1] py-3 rounded-[35px]">
                    <img src={pasta} alt="Special Salad" className="md:w-26 md:h-24 lg:w-38 lg:h-32 object-cover rounded-full" />
                  </div>
                  <div className='flex justify-between items-center pt-3 px-3'>
                    <h3 className=" Inter-SemiBold mt-2 md:text-[15px]">Special Salad</h3>
                    <img src={like} alt="Like-icon" className="md:w-5 md:h-5 lg:w-6 lg:h-6  object-cover rounded-full" />
                  </div>
    
                  <div className="flex mt-1 px-3 gap-3">
                    <div class="flex items-center">
                      <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                    <span className="Inter-Medium ml-1">5.0</span>
                  </div>
                </div>
    
                <div className="bg-white rounded-[35px] shadow-2xl p-4 w-68 text-center z-20 bottom-20 absolute right-20 hidden xl:block">
                  <div className="flex justify-center bg-[#ECEFF1] py-3 rounded-[35px]">
                    <img src={chickenfry} alt="Chicken Fry" className="w-38 h-38 object-cover rounded-full" />
                  </div>
                  <div className='flex justify-between items-center pt-3 px-3'>
                    <h3 className=" Inter-SemiBold mt-2">Good for Health</h3>
                    <img src={like} alt="Like-icon" className="w-6 h-6  object-cover rounded-full" />
                  </div>
    
                  <div className="flex mt-1 px-3 gap-3">
                    <div class="flex items-center">
                      <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                    <span className=" Inter-Medium ml-1">5.0</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
  )
}

export default HeroSection
