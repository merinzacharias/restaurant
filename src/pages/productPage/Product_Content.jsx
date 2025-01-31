import React from 'react'
import orange from "../../assets/orange image 1.png"
import biriyani from "../../assets/biriyani.jpg"
import { BsFilterSquare } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";


const Menu_Cards = [
    {
        id: 1,
        name: "Chicken Biriyani",
        price: 10,
        rating: 4.1,
        count: 120,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: biriyani,
    },
    {
        id: 2,
        name: "Chicken Biriyani",
        price: 10,
        rating: 4.1,
        count: 120,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: biriyani,
    },
    {
        id: 3,
        name: "Chicken Biriyani",
        price: 10,
        rating: 4.1,
        count: 120,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: biriyani,
    },
]

const Product_Content = () => {
    return (
        <div>
            <section className='relative'> 
                <img src={orange} alt='orange-image' className='hidden md:block md:h-40 lg:60 xl:h-70 left-0 scale-x-[-1] absolute top-0' />
                <div className='flex flex-col  justify-end items-center mt-5 px-8 xl:px-30'>
                    <div className='flex justify-end items-center w-full'>
                        <div className='flex justify-between items-center gap-4 xl:gap-10'>
                            <div>
                                <div className='border border-[#FB8A22] h-7 w-40 flex md:hidden justify-center items-center xl:w-50 rounded-md'>
                                    <input
                                        type="text"
                                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none placeholder:opacity-80"
                                        id="searchfood"
                                        placeholder="Select Menu" />
                                    <label
                                        for="searchfood"
                                        className="absolute left-3 top-0 mb-0 max-w-[90%] leading-[1.6] text-black">
                                    </label>
                                </div>
                            </div>
                            <div className='border border-[#FB8A22] h-7 w-35 flex justify-center items-center xl:w-50 rounded-md'>
                                <input
                                    type="text"
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none placeholder:opacity-80"
                                    id="searchfood"
                                    placeholder="Search Food" />
                                <label
                                    for="searchfood"
                                    className="absolute left-3 top-0 mb-0 max-w-[90%] leading-[1.6] text-black">
                                </label>
                            </div>
                            <BsFilterSquare size={28} className='text-[#FB8A22]' />
                        </div>

                    </div>





                    <div className='hidden md:flex justify-center items-center mt-10 xl:mt-0 h-[90px] xl:h-[200px]'>
                        <div className='text-black relative Inter-Regular rounded-2xl mt-10 gap-10 text-[14px] xl:text-[15px]  flex justify-between items-center bg-white shadow-lg'>
                            <div className='px-2 py-5 xl:px-7 xl:py-10 hover:bg-[#FB8A22] hover:text-white'><p>All Menu</p></div>
                            <div className='px-2 py-5 xl:px-7 xl:py-10 hover:bg-[#FB8A22] hover:text-white'><p>Breakfast</p></div>
                            <div className='px-2 py-5 xl:px-7 xl:py-10 hover:bg-[#FB8A22] hover:text-white'><p>Lunch</p></div>
                            <div className='px-2 py-5 xl:px-7 xl:py-10 hover:bg-[#FB8A22] hover:text-white'><p>Dinner</p></div>
                            <div className='px-2 py-5 xl:px-7 xl:py-10 hover:bg-[#FB8A22] hover:text-white'><p>Special Combo</p></div>
                            <div className='px-2 py-5 xl:px-7 xl:py-10 hover:bg-[#FB8A22] hover:text-white'><p>Buffet</p></div>
                            <div className='px-2 py-5 xl:px-7 xl:py-10 hover:bg-[#FB8A22] hover:text-white'><p>Budget Meal</p></div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center flex-col mt-10 md:mt-0 gap-10'>
                    {Menu_Cards.map((item) => (

                        <div key={item.id} className='flex flex-col justify-between mx-8 xl:mx-50 gap-8 items-center'>
                            <div className='flex justify-between items-center  gap-8'>
                                <div className='flex flex-col justify-between items-start px-2 xl:px-10 gap-2 xl:gap-5'>
                                    <h3 className='Inter-SemiBold text-[14px] xl:text-[18px]'>{item.name}</h3>
                                    <p className='Inter-SemiBold text-[14px] xl:text-[16px]'>${item.price}</p>
                                    <div className='flex items-center gap-1 text-[14px]'>
                                        <FaStar size={15} className='text-amber-300' />
                                        <p className='Inter-SemiBold text-[12px] xl:text-[14px]'>{item.rating}</p>
                                        <p className='Inter-Regular text-[#646573] text-[12px] xl:text-[14px]'>({item.count})</p>
                                    </div>
                                    <p className='text-[14px] xl:text-[16px]'>{item.description}</p>
                                </div>
                                <div className='flex flex-col justify-center h-[130px] xl:h-[300px] items-center relative'>
                                    <img src={biriyani} alt='Chicken-biriyani-image'/>
                                    <div className='absolute bottom-0'>
                                        <button className=' px-2 py-1 xl:px-3 xl:py-2 rounded-[10px] xl:rounded-[15px] bg-white shadow-lg flex w-[120px] justify-center items-center gap-5'>
                                            <p className='text-green-500 Inter-SemiBold'>ADD</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-0.5 bg-gray-200'></div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    )
}

export default Product_Content
