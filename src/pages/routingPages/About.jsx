import React from 'react'
import store from "../../assets/restaurant_store.jpg"
import spoon from "../../assets/spoon_fork.png"
import cook from "../../assets/cook.png"
import plate from "../../assets/plate.png"

const Services_cards = [
  {
    id: 1,
    image: pasta,
    title: "Best Chef",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",

    
  },
  {
    id: 2,
    image: pasta,
    title: "Best Chef",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
  },
  {
    id: 3,
    name: "Tomato Salad",
    image: pasta,
    title: "Best Chef",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
  },  
];

const About = () => {
  return (


    <div>
      {/* About-hero */}
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

      {/* About-services */}
      <div className='mt-20 flex flex-col justify-between gap-18 items-center relative h-auto p-5'>
        <h3 className='text-[#FB8A22] text-[18px] Inter-SemiBold'>Services We Offer</h3>
        <div className='flex justify-between items-center mx-30'>
    
    
          <div className='flex flex-col justify-center gap-3 items-center w-[100%] bg-white shadow-2xl lg:w-[25%] py-15 px-8'>
            <div className='w-20 h-20 md:w-30 md:h-30 rounded-full bg-[#FAE8DC] flex justify-center items-center '>
              <img src={cook} alt='badge-icon' className='h-15 md:h-15 ' />
            </div>
            <div className='flex flex-col justify-between items-center'>
              <h3 className='pt-5 Inter-Medium text-[18px] md:text-[18px] lg:text-[20px]'>Best Chef</h3>
              <p className='Inter-Regular text-[16px] md:text-[13px] lg:text-[15px] text-[#646573] pt-5 text-center px-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
            </div>
          </div>

          {/* <div className='flex flex-col justify-center gap-5 items-center w-[100%] bg-white shadow-2xl lg:w-[25%] py-15 px-8'>
            <div className='w-20 h-20 md:w-30 md:h-30 rounded-full bg-[#FAE8DC] flex justify-center items-center '>
              <img src={plate} alt='badge-icon' className='h-15 md:h-15 ' />
            </div>
            <div className='flex flex-col justify-between items-center'>
              <h3 className='pt-5 Inter-Medium text-[18px] md:text-[18px] lg:text-[20px]'>Quality Food</h3>
              <p className='Inter-Regular text-[16px] md:text-[13px] lg:text-[15px] text-[#646573] pt-5 text-center px-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
            </div>
          </div>

          <div className='flex flex-col justify-center gap-5 items-center w-[100%] bg-white shadow-2xl lg:w-[25%] py-15 px-8'>
            <div className='w-20 h-20 md:w-30 md:h-30 rounded-full bg-[#FAE8DC] flex justify-center items-center '>
              <img src={cook} alt='badge-icon' className='h-15 md:h-15 ' />
            </div>
            <div className='flex flex-col justify-between items-center'>
              <h3 className='pt-5 Inter-Medium text-[18px] md:text-[18px] lg:text-[20px]'>Perfect Cook</h3>
              <p className='Inter-Regular text-[16px] md:text-[13px] lg:text-[15px] text-[#646573] pt-5 text-center px-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
            </div>
          </div>    */}



        </div>
      </div>



      {/* last */}
    </div>



  )
}

export default About
