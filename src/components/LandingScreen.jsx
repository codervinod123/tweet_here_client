import Logo from "../assets/logo.svg";
import PhoneImage from "../assets/image.png";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Features from "./Features";
import Footer from "./Footer";

const LandingScreen = () => {
  return (
    <div className=" bg-white w-screen h-screen">
      <nav className="flex justify-between py-4 items-center px-20 m-auto max-w-[1200px]">
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
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>
      </nav>
      <section className="flex flex-col justify-center items-center max-w-[1200px] m-auto">
        <div className="flex justify-between">
          <div className="flex flex-col gap-8 lg:gap-24 items-center pt-16">
            <h1 className="text-center text-[50px] leading-[60px] font-bold max-w-[40rem]">
              What is the best way to express your thoughts?
            </h1>
            <p className="text-center mb-16 max-w-[30rem] text-font-rgb text-[1.1rem]">
              Allowing users to share posts in a concise and engaging format.
              This functionality includes user-friendly input, real-time
              posting, and interactive elements such as likes and comments,
              creating a dynamic social experience. The feature is built with
              scalability and smooth performance in mind, ensuring a seamless
              experience for all users.
            </p>
          </div>
          <div className="hidden lg:flex">
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
        <div className="flex justify-center items-center">
          <div className="font-bold text-xl flex items-center bg-yellow-400 w-fit px-8 py-3 rounded-md">
            <Link to="/home">
              <button className="">Start Now</button>
            </Link>
            <IoMdArrowForward />
          </div>
        </div>
      </section>
      <div>
        <Features />
      </div>
      <Footer />
    </div>
  );
};

export default LandingScreen;
