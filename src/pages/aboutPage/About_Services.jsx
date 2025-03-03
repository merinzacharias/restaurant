import React from 'react'
import cook from "../../assets/cook.png"
import plate from "../../assets/plate.png"


const Services_cards = [
  {
    id: 1,
    image: cook,
    title: "Best Chef",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",


  },
  {
    id: 2,
    image: plate,
    title: "Quality Food",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
  },
  {
    id: 3,
    image: cook,
    title: "Perfect Cook",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
  },
];

const About_Services = () => {
  return (

    <div className='flex justify-center items-center'>
      <div className='xl:w-[1440px'>
        <div className='mt-10 md:mt-20 flex flex-col justify-between gap-8 xl:gap-12 items-center relative h-auto p-5'>
          <h3 className='text-[#FB8A22] text-[18px] Inter-SemiBold'>Services We Offer</h3>
          <div className='flex justify-between items-center gap-10 flex-col md:flex-row mx-8 xl:mx-30'>

            {Services_cards.map((item) => (
              <div key={item.id} className='flex flex-col justify-center gap-3 items-center w-[100%] bg-white hover:shadow-2xl lg:w-[25%] py-8 px-4 xl:py-15 xl:px-8'>
                <div className='w-20 h-20 md:w-25 md:h-25 lg:w-30 lg:h-30 rounded-full bg-[#FAE8DC] flex justify-center items-center '>
                  <img src={item.image} alt='badge-icon' className='h-15' />
                </div>
                <div className='flex flex-col justify-between items-center'>
                  <h3 className='pt-5 Inter-Medium text-[18px] md:text-[18px] lg:text-[20px]'>{item.title}</h3>
                  <p className='Inter-Regular text-[16px] md:text-[13px] lg:text-[15px] text-[#646573] pt-5 text-center px-3 xl:px-8'>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About_Services
