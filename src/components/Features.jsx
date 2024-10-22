import React from 'react'
import { MdAddTask } from "react-icons/md";
import { HiOutlineRefresh } from "react-icons/hi";
import { BsGraphUpArrow } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { IoBookmarksOutline } from "react-icons/io5";
import { BsCalendarDate } from "react-icons/bs";


const Features = () => {
    return (
        <div className='max-w-[1200px] flex flex-col m-auto justify-center items-center'>
            <h1 className='text-[2.5rem] font-bold'>Tweet Here Features</h1>
            <p className='text-center mb-16 max-w-[50rem] text-[#5b4e4ec7] text-[1.1rem]'>Tweet Here offers a range of powerful features designed to help you manage social interaction effortlessly and stay in sync across all your devices.</p>

            <div className='flex flex-wrap gap-[2rem] justify-center mb-[5rem]'>
                {
                    Array.from({ length: 6 }).map(() => {
                        return (
                            <div class="bg-[#fff] p-[1rem] border rounded-md w-[320px] transition-all duration-700 hover:translate-y-2">
                                <div class="gap-2 flex items-center mb-[.5rem]">
                                    <i class="text-[1.2rem] text-[#ff6f61]">
                                        <MdAddTask size={"1.2rem"} color={""} />
                                    </i>
                                    <h3 class="text-[1.2rem] text-[#333]">Smart Task Management</h3>
                                </div>
                                <p class="text-[.9rem] text-[#666]">Organize tasks efficiently with drag-and-drop features and easy task prioritization.</p>
                            </div>
                        )
                    })
                }
            </div>


        </div>
    )
}

export default Features