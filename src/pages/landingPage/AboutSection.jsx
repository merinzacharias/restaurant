import React from 'react'
import orange from "../../assets/orange image 1.png"
import badge from "../../assets/star_badge.png"
import spoon from "../../assets/spoon_fork.png"
import burger from "../../assets/burger.png"


const AboutSection = () => {
  return (
    <section className='relative pt:15 md:pt-18 lg:pt-20'>
        <img src={orange} alt='orange-image' className='hidden md:block md:h-40 lg:60 xl:h-70 left-0 scale-x-[-1] absolute top-0' />
        <div className='flex flex-col justify-center items-center gap-5 lg:gap-15'>
          <div>
            <h3 className='Inter-SemiBold text-[23px] lg:text-[35px] py-8 md:py-0'>About The Company</h3>
          </div>
          <div className='mx-auto'>
            <div className='flex flex-col sm:flex-row justify-between items-center mx-6 lg:mx-30 gap-15'>
              <div className='flex flex-col justify-center items-center w-[100%] lg:w-[25%]'>
                <div className='w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#FAE8DC] flex justify-center items-center '>
                  <img src={badge} alt='badge-icon' className='h-10 md:h-12 ' />
                </div>
                <h3 className='pt-5 Inter-Medium text-[18px] md:text-[18px] lg:text-[20px]'>More than 10 year</h3>
                <p className='Inter-Regular text-[16px] md:text-[13px] lg:text-[16px] text-[#646573] pt-5 text-center'>We have a great pleasure in introducing our
                  concern being the leaders in the fields of Spicy
                  Food Products. We have been serving the end
                  users and Consumer.</p>
              </div>

              <div className='flex flex-col justify-center items-center w-[100%] lg:w-[25%]'>
                <div className='w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#FAE8DC] flex justify-center items-center '>
                  <img src={spoon} alt='badge-icon' className='h-10 md:h-12 ' />
                </div>
                <h3 className='pt-5 Inter-Medium text-[18px] md:text-[18px] lg:text-[20px]'>More than 10 year</h3>
                <p className='Inter-Regular text-[16px] md:text-[13px] lg:text-[16px] text-[#646573] pt-5 text-center'>We have a great pleasure in introducing our
                  concern being the leaders in the fields of Spicy
                  Food Products. We have been serving the end
                  users and Consumer.</p>
              </div>

              <div className='flex flex-col justify-center items-center w-[100%] lg:w-[25%]'>
                <div className='w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#FAE8DC] flex justify-center items-center '>
                  <img src={burger} alt='badge-icon' className='h-10 md:h-12 ' />
                </div>
                <h3 className='pt-5 Inter-Medium text-[18px] md:text-[18px] lg:text-[20px]'>More than 10 year</h3>
                <p className='Inter-Regular text-[16px] md:text-[13px] lg:text-[16px] text-[#646573] pt-5 text-center'>We have a great pleasure in introducing our
                  concern being the leaders in the fields of Spicy
                  Food Products. We have been serving the end
                  users and Consumer.</p>
              </div>
            </div>
          </div>
          <button className='bg-[#FB8A22] rounded-[37px] px-4 py-2 md:px-6 md:py-3  lg:px-8 lg:py-4 text-white text-[14px] md:text-[14px] lg:text-[18px] xl:text-[20px] Inter-SemiBold'>Read More</button>


        </div>
      </section>
  )
}

export default AboutSection
