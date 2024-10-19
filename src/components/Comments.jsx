import { useState, useEffect } from "react";
import axios from "axios";

const Comments = ({ tweet }) => {
  const [commentData, setCommentData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getCommentData();
    // eslint-disable-next-line
  }, [page]);

  const getCommentData = async () => {
    const databaseURL = import.meta.env.VITE_BACKEND_URL;
    const data = await axios.get(
      `${databaseURL}/api/v1/tweet/comment?page=${page}`,
      {
        headers: {
          postid: tweet._id,
        },
      },
    );
    setCommentData(data.data.response);
  };

  const loadMoreComments = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <ul className="py-4">
        {commentData.map((comment) => {
          return (
            <li key={comment._id} className="">
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
                  <div className="flex bg-gray-200 rounded-md w-full p-2">
                    <div className="flex flex-col w-full">
                      <div className="flex justify-between">
                        <h4 className="text-base font-semibold">
                          Carlsen Mangus
                        </h4>
                        <span className="pl-2">2 Hours ago</span>
                      </div>
                      <p>{comment.comment}</p>
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

              {/* <ul className="pl-[47px] py-4">
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
          </ul> */}
              <button></button>
            </li>
          );
        })}
        <div onClick={loadMoreComments} className="flex justify-end">
          <button className="bg-gray-300 rounded-md px-2 py-1">
            Load More
          </button>
        </div>

        {/* <li>
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
  </li> */}
      </ul>
    </div>
  );
};

export default Comments;
