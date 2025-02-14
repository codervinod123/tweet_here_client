import React, { useState } from "react";
import { CiLogout } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { useRef } from "react";
import { RxCross2 } from "react-icons/rx";
import "./global.css";

//recoil

import EditProfileDialog from "./EditProfileDialog";
import useAPI from "../hooks/useApiCall";
import { useRecoilValue } from "recoil";
import { LoginUser } from "../store/userprofile";

const ProfileOverview = () => {
  const user = useRecoilValue(LoginUser);

  const [list, setList] = useState(false);

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear("token");
    localStorage.clear("user");
    navigate("/signin");
  };

  const dialogRef = useRef(null);
  const handleEdit = () => {
    dialogRef.current.showModal();
  };

  const friendListRef = useRef();
  const handleFriendList = (listname) => {
    if (listname == "following") {
      setList(true);
    } else {
      setList(false);
    }

    friendListRef.current.showModal();
  };

  return (
    <nav className="">
      <div className="h-full flex flex-col">
        <div className="bg-white rounded-md bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsIz4qZKTOplGKCIt860B8HP3mTBMZGACNFg&s')] bg-no-repeat lg:bg-[length:100%_10%] bg-[length:100%_15%] bg-top">
          <div className="flex justify-center pt-[18%]">
            {user?.profilePic ? (
              <img
                className="border-2 border-white rounded"
                height={65}
                width={65}
                src={user?.profilePic}
                alt="profile-pic"
              />
            ) : (
              <div
                className={`flex justify-center items-center h-[65px] w-[65px] border-2 border-white rounded text-gray-200 font-semibold text-xl bg-gray-700 `}
              >
                {user?.name && user?.name[0]}
              </div>
            )}
          </div>
          <div className="flex flex-col items-center w-full">
            <div className="flex items-center justify-center w-full">
              <h1 className="font-bold text-black text-xl">{user?.name}</h1>
            </div>
            <p className="text-gray-600 text-sm font-semibold">
              {user?.location}
            </p>
            <p className="text-gray-600 text-sm font-semibold">
              {user?.bio ? (
                user?.bio
              ) : (
                <Link onClick={handleEdit} className="text-blue-600">
                  Add Bio
                </Link>
              )}
            </p>
          </div>
          <p className="text-center text-sm text-gray-600 font-semibold py-4 px-4 leading-5">
            I&apos;d love to change the world, but they won’t give me the source
            code.
          </p>

          <div className="flex justify-center gap-x-4">
            <Link to={"posts/me"} state={user?.tweets}>
              <div className="flex flex-col items-center cursor-pointer">
                <h6 className="font-bold text-gray-900">
                  {user?.tweets?.length}
                </h6>
                <small className="font-semibold text-gray-700">Posts</small>
              </div>
            </Link>
            <div className="h-12 border-l-[2px] border-gray-500"></div>
            <div
              onClick={() => handleFriendList("follower")}
              className="flex flex-col items-center cursor-pointer"
            >
              <h6 className="font-bold text-gray-900">
                {user?.followersList?.length}
              </h6>
              <small className="font-semibold text-gray-700">Follower</small>
            </div>
            <div className="h-12 border-l-[2px] border-gray-500"></div>
            <div
              onClick={() => handleFriendList("following")}
              className="flex flex-col items-center cursor-pointer"
            >
              <h6 className="font-bold text-gray-900">
                {user?.followingList?.length}
              </h6>
              <small className="font-semibold text-gray-700">Following</small>
            </div>
          </div>

          <div className="px-4 my-4">
            <div className="border-t-[1px] border-gray-400"></div>
          </div>

          <ul className="px-4 flex flex-col gap-4">
            <li>
              <div className="flex gap-2">
                <span>🏠</span>
                <h5 className="font-semibold text-gray-900">Feed</h5>
              </div>
            </li>
            <li>
              <div className="flex gap-2">
                <span>🧞‍♀️</span>
                <h5 className="font-semibold text-gray-900">Connections</h5>
              </div>
            </li>
            <li>
              <div className="flex gap-2">
                <span>🌏</span>
                <h5 className="font-semibold text-gray-900">Latest News</h5>
              </div>
            </li>
            <li>
              <div className="flex gap-2">
                <span>📆</span>
                <h5 className="font-semibold text-gray-900">Events</h5>
              </div>
            </li>
            <li>
              <div className="flex gap-2">
                <span>🗨️</span>
                <h5 className="font-semibold text-gray-900">Groups</h5>
              </div>
            </li>
            <li>
              <div className="flex gap-2">
                <span>🔔</span>
                <h5 className="font-semibold text-gray-900">Notifications</h5>
              </div>
            </li>
            <li>
              <div className="flex gap-2">
                <span>🧭</span>
                <h5 className="font-semibold text-gray-900">Settings</h5>
              </div>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 border bg-gray-500 rounded-md px-2 py-1 text-white"
              >
                <span>
                  <CiLogout />
                </span>
                <h5 className="font-semibold">Logout</h5>
              </button>
            </li>
          </ul>

          <div className="my-4">
            <div className="border-t-[1px] border-gray-400"></div>
          </div>

          <p
            onClick={handleEdit}
            className="flex justify-center items-center gap-2 text-blue-600 text-center text-sm font-semibold mb-4 cursor-pointer"
          >
            <span>Edit Profile</span>
            <CiEdit />
          </p>
        </div>
        <ul className="flex flex-wrap px-4 justify-center gap-x-4 pt-4 text-gray-600 font-semibold">
          <li>About</li>
          <li>Setting</li>
          <li>Support</li>
          <li>Docs</li>
          <li>Help</li>
          <li>Privacy & Terms</li>
        </ul>
        <p className="text-gray-500 text-center text-sm font-semibold">
          &copy; 2024 Tweet Here
        </p>
      </div>

      <dialog ref={dialogRef} className="outline-none rounded">
        <EditProfileDialog reference={dialogRef} />
      </dialog>

      <dialog ref={friendListRef} className="outline-none rounded">
        {user._id && (
          <FriendList reference={friendListRef} user={user._id} list={list} />
        )}
      </dialog>
    </nav>
  );
};

export default ProfileOverview;

const FriendList = ({ reference, user, list }) => {
  const { data } = useAPI(`/api/v1/user/friends?user=${user}`);
  console.log("All the friends", data);

  return (
    <div className="fixed inset-0 flex justify-center items-center transition-colors bg-gray-400/20 ">
      <div className="w-[30vw] h-[75vh] rounded bg-white border p-2">
        <div className="flex justify-between pb-4">
          <div></div>
          <h1 className="text-center text-md font-semibold">
            {list ? "Following" : "Followers"}
          </h1>
          <button
            onClick={() => reference.current.close()}
            className="p-1 rounded-full outline-none bg-gray-400/50 hover:bg-gray-300 transition-all duration-500"
          >
            <RxCross2 size={"1.2rem"} color="red" />
          </button>
        </div>
        {data.followingList && (
          <div className="pt-4 flex flex-col gap-4 overflow-y-auto h-[calc(75vh-4rem)] custom-scrollbar">
            {list
              ? data.followingList.map((user, index) => {
                  return (
                    <React.Fragment key={index}>
                      <div className="px-6 flex items-center justify-between">
                        <div className="flex items-center gap-6">
                          <div className="bg-gray-500 rounded-full">
                            {user.profilePic ? (
                              <img
                                className="h-10 w-10"
                                src={user.profilePic}
                                alt="user"
                              />
                            ) : (
                              <div
                                className={`flex justify-center items-center h-10 w-10 text-gray-700 font-semibold text-xl bg-[#BFECFF] rounded-full`}
                              >
                                {user.name ? user?.name[0] : "Z"}
                              </div>
                            )}
                          </div>
                          <h1 className="text-gray-700 font-semibold">
                            {user.name}
                          </h1>
                        </div>
                        <button className="bg-blue-500 px-2 py-[2px] rounded text-white">
                          Unfollow
                        </button>
                      </div>
                    </React.Fragment>
                  );
                })
              : data.followersList.map((user, index) => {
                  return (
                    <React.Fragment key={index}>
                      <div className="px-6 flex items-center justify-between">
                        <div className="flex items-center gap-6">
                          <div className="bg-gray-500 rounded-full">
                            {user.profilePic ? (
                              <img
                                className="h-10 w-10"
                                src={user.profilePic}
                                alt="user"
                              />
                            ) : (
                              <div
                                className={`flex justify-center items-center h-10 w-10 text-gray-700 font-semibold text-xl bg-[#BFECFF] rounded-full`}
                              >
                                {user.name ? user?.name[0] : "Z"}
                              </div>
                            )}
                          </div>
                          <h1 className="text-gray-700 font-semibold">
                            {user.name}
                          </h1>
                        </div>
                        <button className="bg-blue-500 px-2 py-[2px] rounded text-white">
                          Follow
                        </button>
                      </div>
                    </React.Fragment>
                  );
                })}
          </div>
        )}
      </div>
    </div>
  );
};
