import { useState } from "react";
import { Spin } from "antd";
import axios from "axios";

import { LoginUser } from "../store/userprofile";
import { useRecoilState } from "recoil";

const EditProfileDialog = ({ reference }) => {
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
    setUser(response.data.data);
    setPreviewProfile(null);
    setProfilePic(null);
    setFormdata({
      name: "",
      bio: "",
      location: "",
    });
    handleCLose();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center transition-colors bg-gray-400/20 ">
      <div className="w-[30vw] h-[75vh] rounded bg-white">
        <div className="p-6 bg-gray-200 rounded-t"></div>
        <div className="px-6">
          <div className="fixed -mt-6">
            <img
              className="h-[52px] w-[52px] rounded-full"
              src={user.profilePic}
              alt=""
            />
          </div>
        </div>
        <div className="mt-10 px-6">
          <div className="">
            <h1 className="text-lg text-gray-700 font-semibold leading-4">
              {user.name}
            </h1>
            <span className="text-xs text-gray-600">{user.email}</span>
          </div>
          {loader ? (
            <div className="flex justify-center items-center mt-24">
              <Spin />
            </div>
          ) : (
            <div className="pt-2">
              <div className="grid grid-flow-col grid-5  border-y py-3">
                <label
                  className="col-span-3 text-sm text-gray-600 "
                  htmlFor="name "
                >
                  Name
                </label>
                <input
                  onChange={(e) => {
                    setFormdata({
                      ...formData,
                      name: e.target.value,
                    });
                  }}
                  className="col-span-2 border outline-none border-gray-300 px-2 py-1 rounded text-sm text-gray-500"
                  type="text"
                />
              </div>
              <div className="grid grid-flow-col grid-5  border-b py-3">
                <label
                  className="col-span-3 text-sm text-gray-600 "
                  htmlFor="name "
                >
                  Bio
                </label>
                <input
                  onChange={(e) => {
                    setFormdata({
                      ...formData,
                      bio: e.target.value,
                    });
                  }}
                  className="col-span-2 border outline-none border-gray-300 px-2 py-1 rounded text-sm text-gray-500"
                  type="text"
                />
              </div>
              <div className="grid grid-flow-col grid-5  border-b py-3">
                <label
                  className="col-span-3 text-sm text-gray-600 "
                  htmlFor="name "
                >
                  Location
                </label>
                <input
                  onChange={(e) => {
                    setFormdata({
                      ...formData,
                      location: e.target.value,
                    });
                  }}
                  className="col-span-2 border outline-none border-gray-300 px-2 py-1 rounded text-sm text-gray-500"
                  type="text"
                />
              </div>

              <div className="grid grid-cols-6 grid-flow-col border-b py-3">
                <span
                  className="col-span-2 text-sm text-gray-600"
                  htmlFor="name "
                >
                  Profile photo
                </span>
                <label htmlFor="image" className="col-span-4 cursor-pointer">
                  <input
                    onChange={handleDataChange}
                    className="hidden"
                    type="file"
                    id="image"
                  />
                  <div className="flex">
                    {!previewProfile ? (
                      <img
                        className="h-[40px] w-[40px] rounded-full"
                        src={user.profilePic}
                        alt=""
                      />
                    ) : (
                      <img
                        className="h-[40px] w-[40px] rounded-full"
                        src={previewProfile}
                        alt=""
                      />
                    )}

                    <div>
                      <span className="border border-gray-300 ml-4 text-sm py-[2px] px-2 rounded text-gray-500">
                        Click to replace
                      </span>
                    </div>
                  </div>
                </label>
              </div>

              <div className="py-3 flex justify-between">
                {/* <div>
                  <button className="flex gap-1 justify-center text-sm items-center px-2 py-[2px] rounded text-red-500 bg-red-100">
                     <MdDelete size={"1.2rem"}/>
                     Delete User
                  </button>
               </div> */}
                {/* <div className="flex gap-4"> */}
                <button
                  onClick={handleCLose}
                  className="border border-gray-500 px-2 rounded py-[2px] text-sm text-gray-500"
                >
                  Cancel
                </button>
                <button
                  onClick={saveUpdate}
                  className="border border-gray-500 bg-black text-gray-300 px-2 rounded py-[2px] text-sm"
                >
                  Save changes
                </button>
                {/* </div> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditProfileDialog;
