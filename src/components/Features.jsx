import React from 'react'
import { MdAddTask } from "react-icons/md";
import { HiOutlineRefresh } from "react-icons/hi";
import { BsGraphUpArrow } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { IoBookmarksOutline } from "react-icons/io5";
import { BsCalendarDate } from "react-icons/bs";

const features=[
    {
        icon: <MdAddTask size={"1.2rem"}/>,
        title: "Real-Time Tweeting",
        description: "Users can post tweets instantly, with real-time updates in their feed",
    },
    {
        icon: <HiOutlineRefresh size={"1.2rem"}/>,
        title: "Follower/Following System",
        description: "Allows users to follow others and build a personal network to see content from their favorite users",
    },
    {
        icon: <BsGraphUpArrow size={"1.2rem"}/>,
        title: "Seamless UX/UI Design",
        description: "Clean and intuitive interface optimized for easy navigation, delivering a smooth user experience",
    },
    {
        icon: <HiUserGroup size={"1.2rem"}/>,
        title: "Responsive Across Devices",
        description: "The app adapts to different screen sizes, providing an optimized experience across smartphones, tablets, and desktops",
    },
    {
        icon: <IoBookmarksOutline size={"1.2rem"}/>,
        title: "Likes & Comments on Tweets",
        description: "Users can like or comment on tweets, promoting interaction and conversation within the community",
    },
    {
        icon: <BsCalendarDate size={"1.2rem"}/>,
        title: "Hashtag Support",
        description: "Users can include hashtags in their tweets to categorize content and make it discoverable by a broader audience",
    },
    {
        icon: <BsCalendarDate size={"1.2rem"}/>,
        title: "Trending Topics Section",
        description: "Displays popular hashtags and topics based on user activity, helping users stay up-to-date on what’s trending",
    },
    {
        icon: <BsCalendarDate size={"1.2rem"}/>,
        title: "Security and Privacy",
        description: "Implements robust security measures to protect user data and ensure privacy, including encryption and secure data storage",
    }
]

const Features = () => {
    return (
        <div className='max-w-[1200px] flex flex-col m-auto justify-center items-center py-12'>
            <h1 className='text-[2.5rem] font-bold'>Tweet Here Features</h1>
            <p className='text-center mb-16 max-w-[50rem] text-[#5b4e4ec7] text-[1.1rem]'>Tweet Here offers a range of powerful features designed to help you manage social interaction effortlessly and stay in sync across all your devices.</p>

            <div className='flex flex-wrap gap-[2rem] justify-center mb-[5rem]'>
                {
                    features.map((feature) => {
                        return (
                            <div class="bg-[#fff] p-[1rem] border rounded-md w-[320px] transition-all duration-700 hover:translate-y-2">
                                <div class="gap-2 flex items-center mb-[.5rem]">
                                    <i class="text-[1.2rem] text-[#ff6f61]">
                                        { feature.icon }
                                    </i>
                                    <h3 class="text-[1.2rem] text-[#333]">{feature.title}</h3>
                                </div>
                                <p class="text-[.9rem] text-[#666]">{feature.description}</p>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Features