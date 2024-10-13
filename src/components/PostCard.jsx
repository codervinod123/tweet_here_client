import { BiDotsHorizontalRounded } from "react-icons/bi";
import timeAgo from "../helper/duration-calculator";
import { SlLike } from "react-icons/sl";
import { FaComment } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";
import { IoIosSend } from "react-icons/io";
import { Spin } from "antd";
import useAPI from "../hooks/useApiCall";
import axios from "axios";

const PostCard = () => {
  const { data } = useAPI("/api/v1/tweet");

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
    // console.log("Liked The Post", tweetId);
  };

  return !data ? (
    <div className="flex justify-center pt-6">
      <Spin />
    </div>
  ) : (
    <>
      {data &&
        data?.map((tweet) => {
          console.log("Tweet Post", tweet);
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
                          <h4 className="font-bold text-gray-700">
                            Lori Forguson
                          </h4>
                        )}
                        <span className="text-sm text-gray-500">
                          {timeAgo(tweet?.createdAt)}
                        </span>
                      </div>

                      {tweet.author ? (
                        <p className="text-sm text-gray-700">
                          {tweet?.author?.bio}
                        </p>
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
                      Like ({tweet.likes.length})
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
                <div className="flex gap-2">
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
                  <form className="w-full rounded flex px-4 bg-[#ECFFE6]">
                    <textarea
                      rows={1}
                      data-autoresize={true}
                      placeholder="Place Your Comment..."
                      className="bg-[#ECFFE6] placeholder:text-gray-600 w-full rounded p-2 outline-none resize-none"
                      name=""
                      id=""
                    ></textarea>
                    <button className="">
                      <IoIosSend color="#3C3D37" size={"1.4rem"} />
                    </button>
                  </form>
                </div>

                <ul className="py-4">
                  <li className="">
                    <div>
                      <div className="flex gap-2">
                        <div>
                          <span>
                            <img
                              height={45}
                              width={45}
                              className="rounded-full flex-shrink-0"
                              src="https://social-react-sb.vercel.app/assets/07-DLMl_mTI.jpg"
                              alt="post-owner"
                            />
                          </span>
                        </div>
                        <div className="flex bg-[#ECFFE6] rounded-md w-full p-2">
                          <div className="flex flex-col">
                            <div className="flex justify-between">
                              <h4 className="text-base font-semibold">
                                Carlsen Mangus
                              </h4>
                              <span>2 Hours ago...</span>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet consectet sed in ab
                              illum minima. Quo dolores natus sapiente vitae.
                            </p>
                            <ul></ul>
                          </div>
                        </div>
                      </div>
                      <ul className="flex gap-3 items-center px-[47px] ">
                        <div className="cursor-pointer">
                          <span>Like (3)</span>
                        </div>
                        <div className="h-[5px] w-[5px] bg-gray-700 rounded-full"></div>
                        <div className="cursor-pointer">
                          <span>Reply</span>
                        </div>
                        <div className="h-[5px] w-[5px] bg-gray-700 rounded-full"></div>
                        <div className="cursor-pointer">
                          <span>View 2 Replies</span>
                        </div>
                      </ul>
                    </div>
                    <ul className="pl-[47px] py-4">
                      <li>
                        <div>
                          <div className="flex gap-2">
                            <div>
                              <span>
                                <img
                                  height={45}
                                  width={45}
                                  className="rounded-full flex-shrink-0"
                                  src="https://social-react-sb.vercel.app/assets/07-DLMl_mTI.jpg"
                                  alt="post-owner"
                                />
                              </span>
                            </div>
                            <div className="flex bg-[#ECFFE6] rounded-md w-full p-2">
                              <div className="flex flex-col">
                                <div className="flex justify-between">
                                  <h4 className="text-base font-semibold">
                                    Carlsen Mangus
                                  </h4>
                                  <span>2 Hours ago...</span>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet consectet sed in ab
                                  illum minima
                                </p>
                                <ul></ul>
                              </div>
                            </div>
                          </div>
                          <ul className="flex gap-3 items-center px-[47px] ">
                            <div className="cursor-pointer">
                              <span>Like (3)</span>
                            </div>
                            <div className="h-[5px] w-[5px] bg-gray-700 rounded-full"></div>
                            <div className="cursor-pointer">
                              <span>Reply</span>
                            </div>
                            <div className="h-[5px] w-[5px] bg-gray-700 rounded-full"></div>
                          </ul>
                        </div>
                      </li>
                    </ul>
                    <button></button>
                  </li>
                  <li>
                    <div>
                      <div className="flex gap-2">
                        <div>
                          <span>
                            <img
                              height={45}
                              width={45}
                              className="rounded-full flex-shrink-0"
                              src="https://social-react-sb.vercel.app/assets/07-DLMl_mTI.jpg"
                              alt="post-owner"
                            />
                          </span>
                        </div>
                        <div className="flex bg-[#ECFFE6] rounded-md w-full p-2">
                          <div className="flex flex-col">
                            <div className="flex justify-between">
                              <h4 className="text-base font-semibold">
                                Carlsen Mangus
                              </h4>
                              <span>2 Hours ago...</span>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet consectet sed in ab
                              illum minima. Quo dolores natus sapiente vitae.
                            </p>
                            <ul></ul>
                          </div>
                        </div>
                      </div>
                      <ul className="flex gap-3 items-center px-[47px] ">
                        <div className="cursor-pointer">
                          <span>Like (3)</span>
                        </div>
                        <div className="h-[5px] w-[5px] bg-gray-700 rounded-full"></div>
                        <div className="cursor-pointer">
                          <span>Reply</span>
                        </div>
                        <div className="h-[5px] w-[5px] bg-gray-700 rounded-full"></div>
                        <div className="cursor-pointer">
                          <span>View 2 Replies</span>
                        </div>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default PostCard;
