import { useState, useEffect } from "react";
import { HiPlus } from "react-icons/hi";
import Trending from "./Trending";
import axios from "axios";

const Suggestions = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const res = await axios.get("http://localhost:3001/api/v1/user");
    setUsers(res.data.data);
    console.log(res.data.data);
  };

  const handleFollow = async (followingid) => {
    const followerid = "66ed18c14647523d2b9a9a89";
    console.log(followingid);
    const response = await axios.post(
      "http://localhost:3001/api/v1/follow",
      {},
      {
        headers: {
          followingid: followingid,
          followerid: followerid,
        },
      },
    );
    console.log(response);
  };

  return (
    <div className="flex flex-col gap-4">
      <Trending />
      <div className="bg-white py-4 px-4 rounded-md">
        <div className="">
          <div className="flex flex-col gap-6">
            <div>
              <div className="font-bold text-black text-lg">Who to follow</div>
            </div>

            {users.map((user) => {
              return (
                <div key={user._id} className="flex justify-between ">
                  <div className="flex gap-x-2 items-center">
                    <div>
                      <span>
                        {user.profilePic ? (
                          <img
                            height={40}
                            width={40}
                            className="rounded-full"
                            src={user.profilePic}
                            alt="profile-pic"
                          />
                        ) : (
                          <img
                            height={40}
                            width={40}
                            className="rounded-full"
                            src="https://social-react-sb.vercel.app/assets/07-DLMl_mTI.jpg"
                            alt="profile-pic"
                          />
                        )}
                      </span>
                    </div>
                    <div className="leading-3">
                      <h4 className="text-gray-950 font-semibold">
                        {user.name}
                      </h4>
                      <span className="text-gray-600 text-sm">{user.bio}</span>
                    </div>
                  </div>
                  <div>
                    <div
                      onClick={() => handleFollow(user._id)}
                      className="px-2 py-2 text-blue-600 font-semibold cursor-pointer  rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition-all duration-500"
                    >
                      <HiPlus size={"1.3rem"} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
