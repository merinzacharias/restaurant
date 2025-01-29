import React from 'react'
import dish from "../assets/dish.png"
import { FaFacebook } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="relative bg-black pt-8 pb-6 mt-10">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap text-left lg:text-left">
        <div className="w-full lg:w-6/12 px-4 relative">
          <div className='flex'>
            <img src={dish} className='h-15 md:h-20' />
            <h4 className="text-3xl Inter-Bold pt-5 text-white">FOOD</h4>
          </div>
          <div className="mt-6 lg:mb-0 mb-6 flex  ">
            <button className="bg-[#FB8A22] relative flex justify-center items-center h-10 w-10 align-center rounded-full outline-none  mr-2" type="button">
              <FaFacebook size={28} className='text-white' />
            </button>
            <button class="bg-[#FB8A22] relative font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none  mr-2" type="button">
            <BiLogoInstagramAlt size={28} className='text-white' /></button>
            <button class="bg-[#FB8A22] relative h-10 w-10 flex items-center justify-center align-center rounded-full outline-none  mr-2" type="button">
            <FaSquareXTwitter size={28} className='text-white' /></button>
            
         </div>
        </div>
        <div className="w-full  lg:w-6/12 px-4 ">
          <div className="flex flex-col md:flex-row items-top mb-6">
            <div className="w-full lg:w-4/12 p-4 ml-auto">
              <span className="block uppercase text-white text-sm Inter-SemiBold mb-2">Home</span>
              <ul className="list-unstyled">
                <li>
                  <a className="text-white Inter-Regular block pb-2 text-sm" href="https://www.creative-tim.com/presentation?ref=njs-profile">Help</a>
                </li>
                <li>
                  <a className="text-white Inter-Regular block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">Tarck Order</a>
                </li>
                <li>
                  <a className="text-white Inter-Regular block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">Delivery and Return</a>
                </li>
              </ul>
            </div>

            <div className="w-full lg:w-4/12 p-4 ml-auto">
              <span className="block uppercase text-white text-sm Inter-SemiBold mb-2">About Us</span>
              <ul className="list-unstyled">
                <li>
                  <a className="text-white Inter-Regular block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">About us</a>
                </li>
                <li>
                  <a className="text-white Inter-Regular block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">Careers</a>
                </li>
                <li>
                  <a className="text-white Inter-Regular block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Investors</a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
      <hr className="my-6 border-white mt-20" />
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          <div className="text-sm text-white font-semibold py-1 space-x-1">
            <p>Copyright © <span id="get-current-year">2021</span></p>
          </div>
        </div>


      </div>
    </div>
  </footer>
  )
}

export default Footer
