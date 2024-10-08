import Logo from "../assets/logo.svg";
import PhoneImage from "../assets/image.png";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const LandingScreen = () => {
  return (
    <div className="px-20 bg-white">
      <nav className="flex justify-between py-4 items-center">
        <div className="flex gap-x-2">
          <span>
            <img src={Logo} alt="logo" />
          </span>
          <span>
            <h3 className="text-2xl font-semibold text">Tweet Here</h3>
          </span>
        </div>
        <ul className="flex gap-x-8 font-semibold text-lg">
          <li>About Us</li>
          <li>Contact</li>
          <li>Sign In</li>
          <li>Sign up</li>
        </ul>
      </nav>
      <section className="">
        <div className="flex justify-between">
          <div className="flex flex-col w-[50%] pt-16 gap-12">
            <h1 className="text-[50px] leading-[60px] font-bold max-w-[70%]">
              What is the best way to express your thoughts?
            </h1>
            <div className="font-bold text-xl flex items-center bg-yellow-400 w-fit px-8 py-3 rounded-md">
              <Link to="/home">
                <button className="">Start Now</button>
              </Link>
              <IoMdArrowForward />
            </div>
          </div>
          <div className="">
            <span>
              <img
                className=""
                width={380}
                src={PhoneImage}
                alt="phone-image"
              />
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingScreen;
