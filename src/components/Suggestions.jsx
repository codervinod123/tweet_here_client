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

  return (
    <div className="flex flex-col gap-4">
      <Trending />
      <div className="bg-white py-4 px-4 rounded-md">
        <div className="">
          <div className="flex flex-col gap-6">
            <div>
              <div className="font-bold text-black text-lg">Who to follow</div>
            </div>
            <div className="flex justify-between ">
              <div className="flex gap-x-2 items-center">
                <div>
                  <span>
                    <img
                      height={40}
                      width={40}
                      className="rounded-full"
                      src="https://social-react-sb.vercel.app/assets/07-DLMl_mTI.jpg"
                      alt=""
                    />
                  </span>
                </div>
                <div className="leading-3">
                  <h4 className="text-gray-950 font-semibold">Brain Lara</h4>
                  <span className="text-gray-600 text-sm">Cricketer</span>
                </div>
              </div>
              <div>
                <div className="px-2 py-2 bg-gray-200 rounded-full">
                  <HiPlus size={"1.3rem"} />
                </div>
              </div>
            </div>
            <div className="flex justify-between ">
              <div className="flex gap-x-2 items-center">
                <div>
                  <span>
                    <img
                      height={40}
                      width={40}
                      className="rounded-full"
                      src="https://social-react-sb.vercel.app/assets/07-DLMl_mTI.jpg"
                      alt=""
                    />
                  </span>
                </div>
                <div className="leading-3">
                  <h4 className="text-gray-950 font-semibold">Brain Lara</h4>
                  <span className="text-gray-600 text-sm">Cricketer</span>
                </div>
              </div>
              <div>
                <div className="px-2 py-2 bg-gray-200 rounded-full">
                  <HiPlus size={"1.3rem"} />
                </div>
              </div>
            </div>
            <div className="flex justify-between ">
              <div className="flex gap-x-2 items-center">
                <div>
                  <span>
                    <img
                      height={40}
                      width={40}
                      className="rounded-full"
                      src="https://social-react-sb.vercel.app/assets/07-DLMl_mTI.jpg"
                      alt=""
                    />
                  </span>
                </div>
                <div className="leading-3">
                  <h4 className="text-gray-950 font-semibold">Brain Lara</h4>
                  <span className="text-gray-600 text-sm">Cricketer</span>
                </div>
              </div>
              <div>
                <div className="px-2 py-2 bg-gray-200 rounded-full">
                  <HiPlus size={"1.3rem"} />
                </div>
              </div>
            </div>
            <div className="flex justify-between ">
              <div className="flex gap-x-2 items-center">
                <div>
                  <span>
                    <img
                      height={40}
                      width={40}
                      className="rounded-full"
                      src="https://social-react-sb.vercel.app/assets/07-DLMl_mTI.jpg"
                      alt=""
                    />
                  </span>
                </div>
                <div className="leading-3">
                  <h4 className="text-gray-950 font-semibold">Brain Lara</h4>
                  <span className="text-gray-600 text-sm">Cricketer</span>
                </div>
              </div>
              <div>
                <div className="px-2 py-2 bg-gray-200 rounded-full">
                  <HiPlus size={"1.3rem"} />
                </div>
              </div>
            </div>
            <div className="flex justify-between ">
              <div className="flex gap-x-2 items-center">
                <div>
                  <span>
                    <img
                      height={40}
                      width={40}
                      className="rounded-full"
                      src="https://social-react-sb.vercel.app/assets/07-DLMl_mTI.jpg"
                      alt=""
                    />
                  </span>
                </div>
                <div className="leading-3">
                  <h4 className="text-gray-950 font-semibold">Brain Lara</h4>
                  <span className="text-gray-600 text-sm">Cricketer</span>
                </div>
              </div>
              <div>
                <div className="px-2 py-2 bg-gray-200 rounded-full">
                  <HiPlus size={"1.3rem"} />
                </div>
              </div>
            </div>
            <div className="flex justify-between ">
              <div className="flex gap-x-2 items-center">
                <div>
                  <span>
                    <img
                      height={40}
                      width={40}
                      className="rounded-full"
                      src="https://social-react-sb.vercel.app/assets/07-DLMl_mTI.jpg"
                      alt=""
                    />
                  </span>
                </div>
                <div className="leading-3">
                  <h4 className="text-gray-950 font-semibold">Brain Lara</h4>
                  <span className="text-gray-600 text-sm">Cricketer</span>
                </div>
              </div>
              <div>
                <div className="px-2 py-2 bg-gray-200 rounded-full">
                  <HiPlus size={"1.3rem"} />
                </div>
              </div>
            </div>
            <div className="flex justify-between ">
              <div className="flex gap-x-2 items-center">
                <div>
                  <span>
                    <img
                      height={40}
                      width={40}
                      className="rounded-full"
                      src="https://social-react-sb.vercel.app/assets/07-DLMl_mTI.jpg"
                      alt=""
                    />
                  </span>
                </div>
                <div className="leading-3">
                  <h4 className="text-gray-950 font-semibold">Brain Lara</h4>
                  <span className="text-gray-600 text-sm">Cricketer</span>
                </div>
              </div>
              <div>
                <div className="px-2 py-2 bg-gray-200 rounded-full">
                  <HiPlus size={"1.3rem"} />
                </div>
              </div>
            </div>
            <div className="flex justify-between ">
              <div className="flex gap-x-2 items-center">
                <div>
                  <span>
                    <img
                      height={40}
                      width={40}
                      className="rounded-full"
                      src="https://social-react-sb.vercel.app/assets/07-DLMl_mTI.jpg"
                      alt=""
                    />
                  </span>
                </div>
                <div className="leading-3">
                  <h4 className="text-gray-950 font-semibold">Brain Lara</h4>
                  <span className="text-gray-600 text-sm">Cricketer</span>
                </div>
              </div>
              <div>
                <div className="px-2 py-2 bg-gray-200 rounded-full">
                  <HiPlus size={"1.3rem"} />
                </div>
              </div>
            </div>
            <div className="flex justify-between ">
              <div className="flex gap-x-2 items-center">
                <div>
                  <span>
                    <img
                      height={40}
                      width={40}
                      className="rounded-full"
                      src="https://social-react-sb.vercel.app/assets/07-DLMl_mTI.jpg"
                      alt=""
                    />
                  </span>
                </div>
                <div className="leading-3">
                  <h4 className="text-gray-950 font-semibold">Brain Lara</h4>
                  <span className="text-gray-600 text-sm">Cricketer</span>
                </div>
              </div>
              <div>
                <div className="px-2 py-2 bg-gray-200 rounded-full">
                  <HiPlus size={"1.3rem"} />
                </div>
              </div>
            </div>
            <div className="flex justify-between ">
              <div className="flex gap-x-2 items-center">
                <div>
                  <span>
                    <img
                      height={40}
                      width={40}
                      className="rounded-full"
                      src="https://social-react-sb.vercel.app/assets/07-DLMl_mTI.jpg"
                      alt=""
                    />
                  </span>
                </div>
                <div className="leading-3">
                  <h4 className="text-gray-950 font-semibold">Brain Lara</h4>
                  <span className="text-gray-600 text-sm">Cricketer</span>
                </div>
              </div>
              <div>
                <div className="px-2 py-2 bg-gray-200 rounded-full">
                  <HiPlus size={"1.3rem"} />
                </div>
              </div>
            </div>
            <div className="flex justify-between ">
              <div className="flex gap-x-2 items-center">
                <div>
                  <span>
                    <img
                      height={40}
                      width={40}
                      className="rounded-full"
                      src="https://social-react-sb.vercel.app/assets/07-DLMl_mTI.jpg"
                      alt=""
                    />
                  </span>
                </div>
                <div className="leading-3">
                  <h4 className="text-gray-950 font-semibold">Brain Lara</h4>
                  <span className="text-gray-600 text-sm">Cricketer</span>
                </div>
              </div>
              <div>
                <div className="px-2 py-2 bg-gray-200 rounded-full">
                  <HiPlus size={"1.3rem"} />
                </div>
              </div>
            </div>
            <div className="flex justify-between ">
              <div className="flex gap-x-2 items-center">
                <div>
                  <span>
                    <img
                      height={40}
                      width={40}
                      className="rounded-full"
                      src="https://social-react-sb.vercel.app/assets/07-DLMl_mTI.jpg"
                      alt=""
                    />
                  </span>
                </div>
                <div className="leading-3">
                  <h4 className="text-gray-950 font-semibold">Brain Lara</h4>
                  <span className="text-gray-600 text-sm">Cricketer</span>
                </div>
              </div>
              <div>
                <div className="px-2 py-2 bg-gray-200 rounded-full">
                  <HiPlus size={"1.3rem"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
