import { BiDotsHorizontalRounded } from "react-icons/bi";
const PostCard = () => {
  return (
    <div className="bg-white rounded-md px-8 py-4">
        <div className="">
            <div className="flex justify-between">
                <div className="flex gap-x-4 items-center">
                    <div>
                        <span>
                            <img height={45} width={45} className="rounded-full" src="https://social-react-sb.vercel.app/assets/07-DLMl_mTI.jpg" alt="post-owner" />
                        </span>
                    </div>
                    <div className="flex flex-col leading-2">
                        <div className="flex items-center gap-x-2">
                            <h4 className="font-bold text-gray-700">Lori Forguson</h4>
                            <span className="text-sm text-gray-500">2 Hours Ago...</span>
                        </div>
                        <p className="text-sm text-gray-700">Web Developer from India</p>
                    </div>
                </div>
                <div>
                    <div className="flex bg-gray-200 px-2 py-2 rounded-md cursor-pointer">
                      <BiDotsHorizontalRounded/>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-4">
            <p className="text-gray-600 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima porro a aliquid quos error magni deserunt totam sunt amet vero! Numquam necessitatibus aut, dignissimos non fugit temporibus doloribus. Error, excepturi?</p>
        </div>
        <div>
            <img className="rounded-md w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsIz4qZKTOplGKCIt860B8HP3mTBMZGACNFg&s" alt="images" />
        </div>
    </div>
  )
}

export default PostCard