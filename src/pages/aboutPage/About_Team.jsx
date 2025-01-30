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
    <div className='mt-20 flex flex-col justify-between gap-20 items-center relative h-auto p-5'>
    <img src={orange} alt='orange-image' className='h-35 sm:h-40 md:h-40 lg:60 xl:h-70  left-0 scale-x-[-1] absolute bottom-0' />
    <h3 className='text-[#FB8A22] text-[18px] Inter-SemiBold'>Meet Our Team</h3>
    <div className='flex justify-between gap-50 items-center'>

      {Team.map((item) => (
        <div key={item.id} className='flex flex-col  justify-between  items-center w-[100%]  lg:w-[55%] py-15 px-8'>
          <img src={item.image} alt='chef-pic' className='h-15 md:h-60 w-auto ' />
          <div className='flex flex-col justify-between items-center'>
            <h3 className='pt-5 Inter-Medium text-center text-[18px] md:text-[18px] lg:text-[20px]'>{item.name}</h3>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default About_Team
