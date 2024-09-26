import Logo from "../assets/logo.svg";
import { MdChat } from "react-icons/md";
import { RiSettings5Fill } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="bg-white px-20 py-4 justify-center items-center sticky top-0 z-10">
      <div className="flex justify-between">
        <div className="flex gap-x-4">
          <img src={Logo} alt="logo" />
          <input
            type="text"
            placeholder="Search..."
            className="px-4 border border-gray-400 focus:border-none focus:outline outline-blue-600 outline-offset-0 outline-1 rounded bg-[#ECFFE6] placeholder:text-gray-400"
          />
        </div>
        <div className="flex items-center gap-x-4">
          <div>
            <ul className="flex justify-center items-center gap-x-8 font-semibold text-gray-400">
              <li className="flex items-center justify-center">
                <a className="flex items-center justify-center" href="#">
                  Demo
                  <RiArrowDropDownLine size={"1.5rem"} />
                </a>
              </li>
              <li>
                <a className="flex items-center justify-center" href="#">
                  Pages
                  <RiArrowDropDownLine size={"1.5rem"} />
                </a>
              </li>
              <li>
                <a className="flex items-center justify-center" href="#">
                  Account
                  <RiArrowDropDownLine size={"1.5rem"} />
                </a>
              </li>
              <li>
                <a className="flex items-center justify-center" href="#">
                  My Networks
                  <RiArrowDropDownLine size={"1.5rem"} />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex gap-x-4">
            <div className="bg-gray-200 p-2 rounded-md cursor-pointer">
              <MdChat size={"1.1rem"} color="#3C3D37" />
            </div>
            <div className="bg-gray-200 p-2 rounded-md cursor-pointer">
              <RiSettings5Fill size={"1.1rem"} color="#3C3D37" />
            </div>
            <div className="bg-gray-200 p-2 rounded-md cursor-pointer">
              <IoMdNotifications size={"1.1rem"} color="#3C3D37" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
