import React from 'react'
import About_Hero from '../aboutPage/About_Hero'
import About_Services from '../aboutPage/About_Services'
import About_Team from '../aboutPage/About_Team'
import About_Video from '../aboutPage/About_Video'


const About = () => {
  return (
   
      <div className="xl:w-[1536px] 2xl:w-auto mx-auto">
        <About_Hero />
        <About_Services />
        <About_Video />
        <About_Team />
      </div>
  )
}

export default About
