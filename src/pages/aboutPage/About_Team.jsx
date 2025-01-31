import React from 'react'
import pic1 from "../../assets/pic1.jpg"
import pic2 from "../../assets/pic2.jpg"
import pic3 from "../../assets/pic3.jpg"
import orange from "../../assets/orange image 1.png"

const Team = [
    {
      id: 1,
      image: pic1,
      name: "MARKINA SULIUS",
    },
    {
      id: 2,
      image: pic2,
      name: "ROY COLEMAN",
    },
    {
      id: 3,
      image: pic3,
      name: "MATHEW JOHNS",
    }
  ]
  


const About_Team = () => {
  return (
    <div className='mt-8 xl:mt-20 flex flex-col justify-between gap-5  items-center relative h-auto p-5'>
    <img src={orange} alt='orange-image' className='h-35 sm:h-40 md:h-40 lg:60 xl:h-70  left-0 scale-x-[-1] absolute bottom-0' />
    <h3 className='text-[#FB8A22] text-[18px] Inter-SemiBold'>Meet Our Team</h3>
    <div className='flex flex-col md:flex-row justify-between gap-0 md:gap-15 xl:gap-50 items-center'>

      {Team.map((item) => (
        <div key={item.id} className='flex flex-col  justify-between  items-center w-[100%]  md:w-[55%] py-10 px-2 lg:py-15 lg:px-8'>
          <img src={item.image} alt='chef-pic' className='h-40 lg:h-60 w-auto ' />
          <div className='flex flex-col justify-between items-center'>
            <h3 className='pt-5 Inter-Medium text-center text-[15px] lg:text-[20px]'>{item.name}</h3>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default About_Team
