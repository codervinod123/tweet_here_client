import { useState, useEffect } from "react";
import { IoIosSend } from "react-icons/io";
import axios from "axios";
import useCommentRequest from "../hooks/useCommentRequest";
import { toast } from "react-toastify";

import { useRecoilState } from "recoil";
import { commentCountStore } from "../store/comment-store";
import { useRecoilValue } from "recoil";
import { LoginUser } from "../store/userprofile";

const Comments = ({ tweet }) => {
  const [commentCount, setCommentCount] = useRecoilState(commentCountStore);

  const [commentData, setCommentData] = useState([]);
  const [comment, setComment] = useState("");
  const [page, setPage] = useState(1);
  const [showNewComment, setShowNewComment] = useState(false);
  const [newComment, setNewComment] = useState([]);

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
    setNewComment([]);
    setPage((prevPage) => prevPage + 1);
  };

  const sendCommentRequest = async (e, modelId) => {
    e.preventDefault();
    try {
      const resp = await useCommentRequest(
        modelId,
        comment,
        "/api/v1/tweet/comment",
      );
      if (resp.response.status == 200) {
        setShowNewComment(true);
        setNewComment([...newComment, comment]);
        setCommentCount((commentCount) => commentCount + 1);
      } else {
        toast.error("An error occurred while posting the comment.");
      }
    } catch (error) {
      console.log("error", error);
      toast.error("An error occurred while posting the comment.");
    } finally {
      setComment("");
    }
  };

  const user = useRecoilValue(LoginUser);

  return (
    <div>
      <div className="flex gap-2">
        <div>
          <span>
            {
              user.profilePic ?
                <img
                  height={45}
                  width={45}
                  className="rounded-full"
                  src={user.profilePic}
                  alt="user"
                />
                :
                <div className={`flex justify-center items-center h-[40px] w-[40px] text-gray-700 font-semibold text-xl bg-[#BFECFF] rounded-full`}>
                  {user?.name ? user?.name[0] : "Z"}
                </div>
            }
          </span>
        </div>
        <form className="w-full rounded flex px-4 bg-gray-200">
          <textarea
            rows={1}
            data-autoresize={true}
            placeholder="Place Your Comment..."
            className="bg-gray-200 placeholder:text-gray-600 w-full rounded p-2 outline-none resize-none"
            name=""
            id=""
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button
            onClick={(e) => sendCommentRequest(e, tweet._id)}
            type="submit"
            className="text-blue-500"
          >
            <IoIosSend size={"1.4rem"} />
          </button>
        </form>
      </div>

      <ul className="flex flex-col-reverse gap-4 py-4">
        {showNewComment &&
          newComment.map((newcomment, index) => {
            return (
              <li key={index}>
                <div>
                  <div className="flex gap-2">
                    <div>
                      <span>
                        {
                          user.profilePic ?
                            <img
                              height={45}
                              width={45}
                              className="rounded-full"
                              src={user.profilePic}
                              alt="user"
                            />
                            :
                            <div className={`flex justify-center items-center h-[40px] w-[40px] text-gray-700 font-semibold text-xl bg-[#BFECFF] rounded-full`}>
                              {user?.name ? user?.name[0] : "Z"}
                            </div>
                        }
                      </span>
                    </div>
                    <div className="flex bg-gray-200 rounded-md w-full p-2">
                      <div className="flex flex-col w-full">
                        <div className="flex justify-between">
                          <h4 className="text-base font-semibold">
                            {user.name}
                          </h4>
                          <span className="pl-2">2 Hours ago</span>
                        </div>
                        <p>{newcomment}</p>
                        <ul></ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>

      <ul className="flex flex-col gap-4">
        {commentData.map((comment) => {
          return (
            <li key={comment._id} className="">
              <div>
                <div className="flex gap-2">
                  <div>
                    <span>
                      {comment.user.profilePic?
                      <img
                        height={45}
                        width={45}
                        className="rounded-full flex-shrink-0"
                        src={comment.user.profilePic}
                        alt="post-owner"
                      />
                      :
                      <div className={`flex justify-center items-center h-[40px] w-[40px] text-gray-700 font-semibold text-xl bg-[#BFECFF] rounded-full`}>
                        { comment.user ? comment.user.name[0] : "Z"}
                      </div>
                    }
                    </span>
                  </div>
                  <div className="flex bg-gray-200 rounded-md w-full p-2">
                    <div className="flex flex-col w-full">
                      <div className="flex justify-between">
                        <h4 className="text-base font-semibold">
                          {comment.user.name}
                        </h4>
                        <span className="pl-2">2 Hours ago</span>
                      </div>
                      <p>{comment.comment}</p>
                      <ul></ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
        <div onClick={loadMoreComments} className="flex justify-end">
          <button className="bg-gray-300 rounded-md px-2 py-1">
            Load More
          </button>
        </div>
      </ul>

    </div>
  );
};

export default Comments;
