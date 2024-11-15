import Logo from "../assets/logo.svg";
import PhoneImage from "../assets/image.png";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Features from "./Features";
import Footer from "./Footer";

import React from "react";
import { BackgroundLines } from "./ui/background-lines";



const LandingScreen = () => {
  return (
    <div className="bg-white w-screen h-screen">
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
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>
      </nav>

      <section className="flex flex-col justify-center items-center max-w-6xl m-auto">
        <BackgroundLinesDemo />

      </section>

      <div>
        <Features />
      </div>

      <Footer />
    </div>
  );
};

export default LandingScreen;




export function BackgroundLinesDemo() {
  return (
    (<BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2
        className="bg-clip-text text-center text-2xl font-sans py-2 md:py-10 z-20 font-bold tracking-tight">
        What is the best way to express your thoughts?
      </h2>
      <p
        className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center tracking-tight">
          Allowing users to share posts in a concise and engaging format.
          This functionality includes user-friendly input, real-time
          posting, and interactive elements such as likes and comments,
          creating a dynamic social experience. The feature is built with
          scalability and smooth performance in mind, ensuring a seamless
          experience for all users.
      </p>
    </BackgroundLines>)
  );
}
