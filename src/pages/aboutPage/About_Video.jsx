import React from 'react'
import cooking from "../../assets/cooking.mp4"


const About_Video = () => {
    return (
        <div className='mt-20 flex relative'>
            <div class="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg">
                <video class="w-full rounded-lg" controls>
                    <source src={cooking} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}

export default About_Video
