import React from 'react'
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import Logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <div className='w-[100%] flex bg-[#14141b] text-black-rgb justify-between items-center p-[1.5rem] flex-wrap gap-0 text-[.875rem]'>
        <div className='flex items-center gap-1'>
            <img src={Logo} className='w-[1.7rem]' alt="logo" />
           <div className='text-[1rem] text-indigo-500 font-bold'>Tweet Here</div>
        </div>
        <div> &copy; Build with  <span className='text-font-rgb font-semibold'>Vinod Prajapati</span></div>
        <div className='flex text-[1.4rem] cursor-pointer gap-4'>
           <RiTwitterXFill className='text-black p-[.1rem]  bg-gray-400 rounded hover:text-[#D24304]'/>
           <IoLogoGithub className='text-black p-[.1rem] bg-gray-400 rounded hover:text-[#D24304]'/>
        </div>
    </div>
  )
}

export default Footer