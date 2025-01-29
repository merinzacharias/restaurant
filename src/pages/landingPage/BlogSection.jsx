import React from 'react'
import barbecue from "../../assets/barbecue chicken.png"


const BlogItems = [
    {
      id: 1,
      date: "15 Jan 2024",
      name: "Burger with French fries and red cabbage salad",
      description: "Vegetable Salad",
      price: "$35.00",
      image: barbecue, // Ensure 'pasta' is imported or defined
    },
    {
      id: 2,
      date: "15 Jan 2024",
      name: "Burger with French fries and red cabbage salad",
      description: "Vegetable Salad",
      price: "$35.00",
      image: barbecue,
    },
    {
      id: 3,
      date: "15 Jan 2024",
      name: "Burger with French fries and red cabbage salad",
      description: "Vegetable Salad",
      price: "$35.00",
      image: barbecue,
    },
    {
      id: 4,
      date: "15 Jan 2024",
      name: "Burger with French fries and red cabbage salad",
      description: "Vegetable Salad",
      price: "$35.00",
      image: barbecue,
    },
  
    {
      id: 4,
      date: "15 Jan 2024",
      name: "Burger with French fries and red cabbage salad",
      description: "Vegetable Salad",
      price: "$35.00",
      image: barbecue,
    },
  ];

const BlogSection = () => {
  return (
   <section className='relative pt-10 '>
           <div className='flex flex-col justify-center gap-10 items-center'>
             <button className='bg-[#FAE8DC] text-[#FB8A22] px-2 py-1 md:px-2 md:py-2  rounded-[5px] text-[14px] md:text-[15px] xl:text-[18px] Inter-Regular'>LATEST BLOG</button>
             <div>
               <h3 className='Inter-Bold text-[23px] lg:text-[35px] py-8 md:py-0'>Our Latest Foods Menu</h3>
             </div>
             <div className='mx-auto'>
               <div className='flex flex-col  md:flex-row justify-between overflow-y-scroll md:overflow-x-scroll xl:w-[1280px] px-7 md:px-10 no-scrollbar h-[525px]  lg:h-[650px] lg:pb-5 w-screen items-center gap-20 md:gap-5 lg:gap-15 md:py-0  lg:pt-5 '>
   
                 {BlogItems.map((item) => (
                   <div key={item.id} className="flex justify-center  items-center  relative">
                     <div className="w-80 h-105 mt-5 md:w-70 md:h-100 lg:w-90 lg:h-120 rounded-[30px] md:rounded-[45px] bg-white shadow-2xl flex flex-col gap-5 pb-15 justify-center items-center">
                       <div>
                         <img
                           src={item.image}
                           alt={item.name}
                           className="w-80 h-60 md:h-55 lg:w-90 lg:h-65 rounded-t-[30px] md:rounded-t-[38px]  lg:rounded-t-[45px]"
                         />
                       </div>
                       <div className='px-8   '>
                         <p className='Inter-Regular text-[15px] text-[#646573]'>{item.date}</p>
                         <h3 className="Inter-SemiBold  text-[18px] pt-3">{item.name}</h3>
                         <div className='border w-full text-[#E6DBDB] md:mt-3 lg:mt-10'></div>
                         <div className='flex justify-between items-center md:mt-5 '>
                           <p className="Inter-SemiBold text-[14px] md:text-[20px] text-black  text-center">
                             {item.price}
                           </p>
                           <button className='bg-[#FB8A22] rounded-[25px] px-4 py-2  text- white text-[13px] lg:text-[16px] text-white  Inter-Regular'>Read More</button>
                         </div>
                       </div>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
             <div>
               <div class="flex space-x-2 items-center">
                 <div class="w-5 h-2 lg:w-15 lg:h-4 bg-[#FB8A22] rounded-full"></div>
                 <div class="w-2 h-2 lg:w-4 lg:h-4 bg-[#E0E0E7] rounded-full"></div>
                 <div class="w-2 h-2 lg:w-4 lg:h-4 bg-[#E0E0E7] rounded-full"></div>
                 <div class="w-2 h-2 lg:w-4 lg:h-4 bg-[#E0E0E7] rounded-full"></div>
               </div>
             </div>
   
   
           </div>
   
         </section>
  )
}

export default BlogSection
