import { useState } from 'react'
import './App.css'
import dish from "./assets/dish.png"
import cart from "./assets/cart.png"
import salmon from "./assets/salmon_dish.png"
import orange from "./assets/orange image 1.png"
import pasta from "./assets/pasta.png"
import chickenfry from "./assets/chicken_fry.png"
import like from "./assets/like_icon.png"
import badge from "./assets/star_badge.png"
import spoon from "./assets/spoon_fork.png"
import burger from "./assets/burger.png"




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/kingster-school-website-template.jpg.avif" alt='profile pic'  /> */}

      {/* navbarbar section */}
      <header className='relative bg-[#F6F7FF]'>
        <div className='mx-0 sm:mx-8 md:mx-12 xl:mx-30 flex justify-between gap-10 items-center right-0 left-0 top-0 py-4 px-4 md:px-6 xl:px-8'>

          <div className='flex justify-between items-center gap-1 md:gap-2 xl:gap-3'>
            <img src={dish} alt='logo' className='h-10 md:h-14 xl:h-18 w-[100%]' />
            <h3 className='text-[18px] md:text-[22px] lg:text-[25px] pt-2 Inter-Bold'>FOOD</h3>
          </div>

          <nav className=' justify-between items-center gap-10 space-x-10 Inter-SemiBold hidden lg:flex'>
            <div className='flex flex-col gap-1'>
              <a href='#' className='text-[18px] text-black'>Home</a>
              <div class="border border-[#FB8A22] w-13"></div>
            </div>
            <a href='#' className=' text-[18px] text-[#A4A9AC]'>About</a>
            <a href='#' className=' text-[18px] text-[#A4A9AC]'>Products</a>
            <a href='#' className=' text-[18px] text-[#A4A9AC]'>Contact US</a>
          </nav>

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

      {/* hero section */}
       <section className='relative pt-8 sm:pt-10 md:pt-12 lg:pt:14 xl:pt-16'>
        <img src={orange} alt='orange-image' className='h-35 sm:h-40 md:h-40 lg:60 xl:h-70 right-0 absolute top-0' />
        <div className='flex flex-col md:flex-row items-start xl:items-center md:gap-1 lg:gap-10 xl:gap-15'>
          <div className='ml-4 sm:ml-8 md:ml-16 xl:ml-38 w-[85%] md:w-[75%] lg:w-[60%] xl:w-[73%] '>
            <button className='bg-[#FAE8DC] text-[#FB8A22] px-2 py-1 md:px-2 md:py-2 rounded-[5px] text-[9px] md:text-[12px] xl:text-[15px] Inter-Regular'>WELCOME TO OUR RESTAURANT</button>
            <h1 className=' text-[25px] sm:text-[30px] md:text-[40px] lg:text-[45px] xl:text-[71px] pb-5 xl:pb-10 Inter-SemiBold pt-3 xl:pt-0'>Delicious Foods For Every Occasion And Festival</h1>
            <h1 className=' text-[10px] sm:text-[13px] md:text-[15px] lg:text-[18px] xl:text-[20px] text-[#646573] pb-6 Inter-Medium w-[90%]'>Delicious Foods For Every Occasion And Festival Delicious Foods For Every Occasion And Festival</h1>
            <button className='bg-[#FB8A22] rounded-[37px] px-3 py-2 md:px-6 md:py-3  xl:px-8 xl:py-4 text-white text-[9px] md:text-[14px] lg:text-[18px] xl:text-[20px] Inter-SemiBold'>Order Now</button>
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

      {/* about section */}
      <section className='relative pt:15 md:pt-18 lg:pt-20'>
      <img src={orange} alt='orange-image' className='hidden md:block md:h-40 lg:60 xl:h-70 left-0 scale-x-[-1] absolute top-0' />
        <div className='flex flex-col justify-center items-center gap-5 lg:gap-15'>
          <div>
            <h3 className='Inter-SemiBold text-[22px] lg:text-[35px] py-8 md:py-0'>About The Company</h3>
          </div>
          <div className='mx-auto'>
            <div className='flex flex-col sm:flex-row justify-between items-center mx-6 lg:mx-30 gap-15'>
              <div className='flex flex-col justify-center items-center w-[100%] lg:w-[25%]'>
              <div className='w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#FAE8DC] flex justify-center items-center '>
              <img src={badge} alt='badge-icon' className='h-10 md:h-12 ' />
                </div>
                <h3 className='pt-5 Inter-Medium text-[15px] md:text-[18px] lg:text-[20px]'>More than 10 year</h3>
                <p className='Inter-Regular text-[10px] md:text-[13px] lg:text-[16px] text-[#646573] pt-5 text-center'>We have a great pleasure in introducing our
                  concern being the leaders in the fields of Spicy
                  Food Products. We have been serving the end 
                  users and Consumer.</p>
              </div>

              <div className='flex flex-col justify-center items-center w-[100%] lg:w-[25%]'>
              <div className='w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#FAE8DC] flex justify-center items-center '>
              <img src={spoon} alt='badge-icon' className='h-10 md:h-12 ' />
                </div>
                <h3 className='pt-5 Inter-Medium text-[15px] md:text-[18px] lg:text-[20px]'>More than 10 year</h3>
                <p className='Inter-Regular text-[10px] md:text-[13px] lg:text-[16px] text-[#646573] pt-5 text-center'>We have a great pleasure in introducing our
                  concern being the leaders in the fields of Spicy
                  Food Products. We have been serving the end 
                  users and Consumer.</p>
              </div>

              <div className='flex flex-col justify-center items-center w-[100%] lg:w-[25%]'>
                <div className='w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#FAE8DC] flex justify-center items-center '>
                  <img src={burger} alt='badge-icon' className='h-10 md:h-12 ' />
                </div>
                <h3 className='pt-5 Inter-Medium text-[15px] md:text-[18px] lg:text-[20px]'>More than 10 year</h3>
                <p className='Inter-Regular text-[10px] md:text-[13px] lg:text-[16px] text-[#646573] pt-5 text-center'>We have a great pleasure in introducing our
                  concern being the leaders in the fields of Spicy
                  Food Products. We have been serving the end 
                  users and Consumer.</p>
              </div>
            </div>
          </div>
          <button className='bg-[#FB8A22] rounded-[37px] px-4 py-2 md:px-6 md:py-3  lg:px-8 lg:py-4 text-white text-[10px] md:text-[14px] lg:text-[18px] xl:text-[20px] Inter-SemiBold'>Read More</button>


        </div>
      </section>


    </>
  )
}

export default App
