import React from 'react'
import Footer from '../components/Footer'
import AboutSection from './landingPage/AboutSection'
import BlogSection from './landingPage/BlogSection'
import Foodmenu from './landingPage/Foodmenu'
import HeroSection from './landingPage/HeroSection'

const AllLandingPage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Foodmenu />
      <BlogSection /> 
      <Footer />
      
    </div>
  )
}

export default AllLandingPage
