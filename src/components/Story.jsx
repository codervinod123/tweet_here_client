import React from 'react'
import { BsPlus } from "react-icons/bs";

const Story = () => {
  return (
    <div className='grid grid-cols-4 gap-4 h-[150px]'>
      
        <div className='h-[150px]'>
          <label htmlFor="story" className='h-full p-3 cursor-pointer bg-gray-300 rounded flex flex-col justify-center items-center border-2 border-dotted '>
             <span className='p-2 bg-gray-200 rounded-full'>
               <BsPlus />
             </span>
             <span className='text-sm'>Add story</span>
          </label>
          <input id='story' type="text" className='hidden'/>
        </div>
        <div className='p-3 bg-gray-300 rounded'>
           <BsPlus />
        </div>
        <div className='p-3 bg-gray-300 rounded'>
           <BsPlus />
        </div>
        <div className='p-3 bg-gray-300 rounded'>
           <BsPlus />
        </div>

    </div>
  )
}

export default Story