import { useState, useEffect } from "react";
import { CiLogout } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { Spin } from "antd";
import { useRef } from "react";
import { IoIosClose } from "react-icons/io";
import { BsUpload } from "react-icons/bs";
import axios from "axios";

//recoil
import { LoginUser } from "../store/userprofile";
import { useRecoilState } from "recoil";


const ProfileOverview = () => {

  const [user, setUser] = useRecoilState(LoginUser);
  useEffect(() => {
    const data = localStorage.getItem("user");
    setUser(JSON.parse(data));
    console.log("Old Data", JSON.parse(data));
  }, []);

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear("token");
    navigate("/signin");
  };

  const dialogRef = useRef(null);
  const handleEdit = () => {
    dialogRef.current.showModal();
  };

  return (
    <nav className="">
      <div className="h-full flex flex-col">
        <div className="bg-white rounded-md bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsIz4qZKTOplGKCIt860B8HP3mTBMZGACNFg&s')] bg-no-repeat bg-[length:100%_10%] bg-top">
          <div className="flex justify-center pt-[18%]">
            <img
              className="border-2 border-white rounded"
              height={65}
              width={65}
              src={
                user?.profilePic
                  ? user?.profilePic
                  : "https://social-react-sb.vercel.app/assets/07-DLMl_mTI.jpg"
              }
              alt="profile-pic"
            />
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
            <div className="flex flex-col items-center">
              <h6 className="font-bold text-gray-900">8</h6>
              <small className="font-semibold text-gray-700">Posts</small>
            </div>
            <div className="h-12 border-l-[2px] border-gray-500"></div>
            {/* <div className="flex flex-col items-center">
              <h6 className="font-bold text-gray-900">{userProfile?.followersList?.length}</h6>
              <small className="font-semibold text-gray-700">Follower</small>
            </div> */}
            <div className="flex flex-col items-center">
              <h6 className="font-bold text-gray-900">
                {user?.followerList?.length}
              </h6>
              <small className="font-semibold text-gray-700">Follower</small>
            </div>
            <div className="h-12 border-l-[2px] border-gray-500"></div>
            <div className="flex flex-col items-center">
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

      <dialog ref={dialogRef} className="h-100 w-100 rounded-md">
        <DialogBox reference={dialogRef} />
      </dialog>
    </nav>
  );
};

export default ProfileOverview;

const DialogBox = ({ reference }) => {
  const [previewProfile, setPreviewProfile] = useState(null);
  const [profilePic, setProfilePic] = useState(null);
  const [loader, setLoader] = useState(false);

  const [formData, setFormdata] = useState({
    name: "",
    bio: "",
    location: "",
  });

  const handleCLose = () => {
    reference.current.close();
  };

  const handleDataChange = (e) => {
    if (e.target.files) {
      const img = e.target.files[0];
      setProfilePic(img);
      setPreviewProfile(URL.createObjectURL(img));
    }
  };

  // const [user, setUser] = useRecoilState(LoginUser);
  const [user, setUser] = useRecoilState(LoginUser);
  const saveUpdate = async () => {
    setLoader(true);
    const formdata = new FormData();
    formdata.append("file", profilePic);
    formdata.append("name", formData.name);
    formdata.append("bio", formData.bio);
    formdata.append("location", formData.location);

    const token = localStorage.getItem("token");

    const databaseURL = import.meta.env.VITE_BACKEND_URL;
    const response = await axios.post(
      `${databaseURL}/api/v1/user/updateprofile`,
      formdata,
      {
        headers: {
          token: token,
        },
      },
    );

    setLoader(false);
    localStorage.setItem("user", JSON.stringify(response.data.data));
    setUser(response.data.data);

    setPreviewProfile(null);
    setProfilePic(null);
    setFormdata({
      name: "",
      bio: "",
      location: "",
    });
  };

  return (
    <div className="p-1 bg-gray-700">
      <div className="bg-gray-900 text-white flex flex-col gap-4 p-4 w-[300px] shadow-lg rounded-md">
        <span onClick={handleCLose} className="cursor-pointer">
          <IoIosClose size={"2rem"} />
        </span>

        {!previewProfile ? (
          <div className="flex justify-center ">
            <label className="cursor-pointer" htmlFor="image">
              <BsUpload size={"3rem"} />
            </label>
            <input
              onChange={handleDataChange}
              className="hidden"
              id="image"
              type="file"
            />
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="h-[5rem] w-[5rem] rounded-full">
              <img
                className="h-full w-full rounded-full"
                src={previewProfile}
                alt="img"
              />
            </div>
          </div>
        )}

        {loader ? (
          <Spin />
        ) : (
          <div>
            <div className="flex w-full justify-between">
              <LabelledInput
                placeholder={"Name"}
                label={"Name"}
                value={formData.name}
                handleChange={(e) => {
                  setFormdata({
                    ...formData,
                    name: e.target.value,
                  });
                }}
                type={"text"}
                name={"name"}
              />
            </div>
            <div className="flex w-full justify-between ">
              <LabelledInput
                placeholder={"Bio"}
                label={"Bio"}
                value={formData.bio}
                handleChange={(e) => {
                  setFormdata({
                    ...formData,
                    bio: e.target.value,
                  });
                }}
                type={"text"}
                name={"bio"}
              />
            </div>
            <div className="flex w-full justify-between ">
              <LabelledInput
                placeholder={"Location"}
                label={"Location"}
                value={formData.location}
                handleChange={(e) => {
                  setFormdata({
                    ...formData,
                    location: e.target.value,
                  });
                }}
                type={"text"}
                name={"location"}
              />
            </div>
          </div>
        )}

        <div className="w-full text-gray-900 bg-gradient-to-r from-teal-400 to-lime-400 hover:bg-gradient-to-l hover:from-teal-400 hover:to-lime-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          <button onClick={saveUpdate}>Save</button>
        </div>
      </div>
    </div>
  );
};

function LabelledInput({ placeholder, label, handleChange, type, name }) {
  return (
    <div className="w-full">
      <label
        htmlFor="name"
        className="block mb-1 text-sm font-medium text-white"
      >
        {label}
      </label>
      <input
        name={name}
        onChange={handleChange}
        type={type}
        id={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
