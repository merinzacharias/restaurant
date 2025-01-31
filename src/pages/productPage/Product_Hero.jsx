import React from 'react'
import cutting from "../../assets/cutting.jpg"

const Product_Hero = () => {
    return (
        <div>
            <div className='flex justify-center items-center'>
                <div className='w-full 2xl:w-[1536px]'>
                    <div className="relative bg-cover bg-center h-[150px] md:h-[200px] ">
                        <img src={cutting} alt='cutting-image' className='h-[150px] md:h-[200px] w-full' />
                        <div className='bg-black opacity-50 w-full absolute inset-0'></div>
                        <div className="absolute inset-0 flex flex-col gap-5 md:gap-10 justify-center items-center bottom-0">
                            <h3 className='text-white Inter-Regular text-[20px] md:text-[30px] lg:text-[50px]'>From Our Kitchen To Your Table</h3>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Product_Hero
