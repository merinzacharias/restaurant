import React from 'react'
import cooking from "../../assets/cooking.mp4"
import play from "../../assets/play.png"


const About_Video = () => {
    return (
        <div>
            <div className='flex justify-center items-center'>
                <div className='w-full 2xl:w-[1536px'>
                    <div className="mt-8 xl:mt-20 relative bg-cover bg-center h-[250px] md:h-[400px] lg:h-[500px] xl:h-[550px]">
                        <video className="absolute inset-0 h-full w-full object-cover" autoPlay loop muted>
                            <source src={cooking} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className='bg-black opacity-50 w-full absolute inset-0'>
                        </div>
                        <div className="absolute inset-0 flex flex-col gap-5 md:gap-10 justify-center items-center bottom-0">

                            <img src={play} alt='play-button' className='h-20 md:h-35 lg:h-50' />
                            <h3 className='text-white Inter-Regular text-[14px] md:text-[30px] lg:text-[40px]'>SEE HOW WE PREPARE OUR FOOD</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About_Video
