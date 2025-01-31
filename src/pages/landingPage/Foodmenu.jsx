import React from 'react'
import pasta from "../../assets/pasta2.png"


const foodItems = [
  {
    id: 1,
    name: "Tomato Salad",
    description: "Vegetable Salad",
    price: 25,
    image: pasta, // Ensure 'pasta' is imported or defined
  },
  {
    id: 2,
    name: "Delicious Food",
    description: "Vegetable Salad",
    price: 90,
    image: pasta,
  },
  {
    id: 3,
    name: "Barbecue Chicken",
    description: "Vegetable Salad",
    price: 40,
    image: pasta,
  },
  {
    id: 4,
    name: "Tomato Salad",
    description: "Vegetable Salad",
    price: 25,
    image: pasta,
  },

  {
    id: 4,
    name: "Tomato Salad",
    description: "Vegetable Salad",
    price: 25,
    image: pasta,
  },
];

const Foodmenu = () => {
  return (
    <section className='relative pt-5 md:pt-10 lg:pt-20 pb-10 mt-10 md:mt-15 lg:mt-20 bg-[#F6F7FF]'>
    <div className='flex flex-col justify-center items-center gap-5 lg:gap-25'>
      <div>
        <h3 className='Inter-Bold text-[23px] lg:text-[35px] py-8 md:py-0'>Our Popular Food Menu</h3>
      </div>
      <div className='mx-auto '>
        <div className='flex  justify-between overflow-x-scroll px-10 no-scrollbar w-screen  xl:w-[1280px]  items-center gap-5 lg:gap-15  pt-20 pb-15 '>

          {foodItems.map((item) => (
            <div key={item.id} className="flex justify-center items-center w-[80%] md:w-[50%] lg:w-[40%] relative">
              <div className="w-40 h-55 md:w-60 md:h-80 lg:w-64 lg:h-80  rounded-[30px] md:rounded-[45px] bg-white p-2 shadow-2xl flex flex-col gap-5 pb-25 justify-center items-center">
                <div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-35 md:h-55 drop-shadow-[0_18.13px_6.04px_rgba(0,0,0,0.25)]"
                  />
                </div>
                <div>
                  <h3 className="Inter-SemiBold text-center text-[18px] md:text-[20px] lg:text-[25px]">{item.name}</h3>
                  <p className="Inter-Regular text-[16px] md:text-[16px] lg:text-[18px] text-black pt-5 text-center">
                    {item.description}
                  </p>
                  <p className="Inter-SemiBold text-[16px] md:text-[20px] lg:text-[35px] text-black pt-5 text-center">
                    ${item.price}
                  </p>
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

export default Foodmenu
