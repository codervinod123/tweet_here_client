import { FaImage } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa6";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { MdEmojiEmotions } from "react-icons/md";

const CreatePost = () => {
  return (
    <div className="py-4 bg-white rounded-md">
        <div className="flex px-8 gap-x-4">
            <div className="rounded-full">
                <span className="rounded-full">
                   <img className="rounded-full" height={45} width={45} src="https://social-react-sb.vercel.app/assets/07-DLMl_mTI.jpg" alt="" />
                </span>
            </div>
            <form className="w-full rounded">
                <textarea rows={2} data-autoresize={true} placeholder="Share your Thoughts..." className="bg-[#e4c3f9] placeholder:text-black w-full rounded p-2 outline-none" name="" id=""></textarea>
            </form>
        </div>
        <ul className="flex gap-4 px-8 py-4">
          
            <li className="bg-gray-100 rounded-sm px-[4px] py-[2px]">
               <span className="flex gap-x-2 text-sm items-center justify-center">
                 <FaImage color="#15B392"/>
                 Photos
               </span>
            </li>
            <li className="bg-gray-200 rounded-sm px-[4px] py-[2px]">
               <span className="flex gap-x-2 text-sm items-center justify-center">
                 <FaVideo color="#00CCDD"/>
                 Vedio
               </span>
            </li>

            <li className="bg-gray-200 rounded-sm px-[4px] py-[2px]">
               <span className="flex gap-x-2 text-sm items-center justify-center">
                 <BsFillCalendarDateFill color="#D91656"/>
                 Event
               </span>
            </li>

            <li className="bg-gray-200 rounded-sm px-[4px] py-[2px]">
               <span className="flex gap-x-2 text-sm items-center justify-center">
                 <MdEmojiEmotions color="#FF7F3E"/>
                 Feeling/Activity
               </span>
            </li>


        </ul>
    </div>
  )
}

export default CreatePost