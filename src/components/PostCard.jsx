import { BiDotsHorizontalRounded } from "react-icons/bi";
import timeAgo from "../helper/duration-calculator";
import { SlLike } from "react-icons/sl";
import { FaComment } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";
import axios from "axios";
import Comments from "./Comments";

// recoil 
import { useRecoilState } from "recoil";
import { likeCountStore } from "../store/like-store";

const PostCard = ({ tweet }) => {

  const [likeCount, setLikeCount]=useRecoilState(likeCountStore);
  const likePost = async (tweetId) => {
    const token = localStorage.getItem("token");
    const likeData = {
      modelName: "Tweet",
      modelId: tweetId,
    };
    const databaseURL = import.meta.env.VITE_BACKEND_URL;
    const response = await axios.post(
      `${databaseURL}/api/v1/tweet/like`,
      likeData,
      {
        headers: {
          token: token,
        },
      },
    );
    console.log("Resp", response);
    if(response.data.data){
      setLikeCount(likeCount=>likeCount+1);
    }else{
      setLikeCount(likeCount=>likeCount-1);
    }
    
  };

  return (
    <div key={tweet?._id} className="bg-white rounded-md px-8 py-4">
      <div className=" ">
        <div className="flex justify-between">
          <div className="flex gap-x-4 items-center">
            <div>
              <span>
                <img
                  height={45}
                  width={45}
                  className="rounded-full"
                  src="https://social-react-sb.vercel.app/assets/07-DLMl_mTI.jpg"
                  alt="post-owner"
                />
              </span>
            </div>
            <div className="flex flex-col leading-2">
              <div className="flex items-center gap-x-2">
                {tweet?.author ? (
                  <h4 className="font-bold text-gray-700">
                    ={tweet?.author?.name}
                  </h4>
                ) : (
                  <h4 className="font-bold text-gray-700">Lori Forguson</h4>
                )}
                <span className="text-sm text-gray-500">
                  {timeAgo(tweet?.createdAt)}
                </span>
              </div>

              {tweet.author ? (
                <p className="text-sm text-gray-700">{tweet?.author?.bio}</p>
              ) : (
                <p className="text-sm text-gray-700">
                  Web Developer from India
                </p>
              )}
            </div>
          </div>
          <div>
            <div className="flex bg-gray-200 px-2 py-2 rounded-md cursor-pointer">
              <BiDotsHorizontalRounded />
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <p className="text-gray-600 text-base py-4">{tweet?.content}</p>
        {tweet?.media[0] && (
          <img
            className="rounded-md w-full"
            src={tweet?.media[0]}
            alt="images"
          />
        )}
        <ul className="py-4 flex justify-between">
          <li className="flex gap-4 text-[14px]">
            <span
              onClick={() => likePost(tweet._id)}
              className="flex items-center gap-1 text-gray-700 cursor-pointer px-2 rounded bg-gray-100 hover:bg-blue-300 transition-all duration-500"
            >
              <SlLike />
              Like ({tweet.likes.length+likeCount})
            </span>
            <span className="flex items-center gap-1 text-gray-700 cursor-pointer  px-2 rounded bg-gray-100 hover:bg-blue-300 transition-all duration-500">
              <FaComment />
              Comment ({tweet.comments.length})
            </span>
          </li>
          <li>
            <span className="flex items-center gap-1 text-gray-700 cursor-pointer  px-2 rounded bg-gray-100 hover:bg-blue-300 transition-all duration-500">
              <IoMdShareAlt className="cursor-pointer" />
              Share
            </span>
          </li>
        </ul>

        <Comments tweet={tweet} />
      </div>
    </div>
  );
};

export default PostCard;
