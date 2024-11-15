import Logo from "../assets/logo.svg";
import PhoneImage from "../assets/image.png";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Features from "./Features";
import Footer from "./Footer";

import React from "react";
import { BackgroundLines } from "./ui/background-lines";
import "./global.css";




const userImage = [
  "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db413b4972c2e56c78ea71_Group%20243-p-500.avif",
  "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db413d6522b3d2498c1dd1_Group%20248.avif",
  "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db413c0d764027125a80dd_Group%20249-p-500.avif",
  "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db413b0d764027125a8036_Group%20251-p-500.avif",
  "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db413ce36b887dca66f43d_Group%20250-p-500.avif",
  "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db413bbc46621137cd853c_Group%20240-p-500.avif",
  "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/672d52834be46579ee98899a_NewAvatarRed.png",
  "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db413d0cc978005c5a5e14_Group%20245-p-500.avif",
  "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db413b13a1439543c3f9f2_Group%20247-p-500.avif",
  "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db413a7930882266c1dbac_Group%20244-p-500.avif",
  "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db413b4972c2e56c78ea71_Group%20243-p-500.avif",
  "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db413d6522b3d2498c1dd1_Group%20248.avif",
  "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db413c0d764027125a80dd_Group%20249-p-500.avif",
  "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db413b0d764027125a8036_Group%20251-p-500.avif",
  "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db413ce36b887dca66f43d_Group%20250-p-500.avif",
  "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db413bbc46621137cd853c_Group%20240-p-500.avif",
  "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/672d52834be46579ee98899a_NewAvatarRed.png",
  "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db413d0cc978005c5a5e14_Group%20245-p-500.avif",
  "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db413b13a1439543c3f9f2_Group%20247-p-500.avif",
  "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db413a7930882266c1dbac_Group%20244-p-500.avif",
]

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


      <div className="group mx-auto max-w-6xl py-4 w-full overflow-hidden relative">
        <div className="absolute top-0 left-0 h-full w-40 bg-gradient-to-r from-white via-white/50 to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 h-full w-40 bg-gradient-to-l from-white via-white/50 to-transparent pointer-events-none z-10"></div>

        <div className="flex items-start gap-12 max-md:flex-wrap max-md:justify-center animate-loop-scroll group-hover:paused">
          {userImage.map((imageLink, index) => (
            <div key={index} className="min-w-[170px] flex justify-center items-center">
              <img className="rounded-md w-[160px]" src={imageLink} alt="" />
            </div>
          ))}
        </div>
      </div>

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
        className="bg-clip-text text-center text-4xl font-sans py-2 md:py-10 z-20 font-bold tracking-tight">
        What is the best way to express your thoughts?
      </h2>
      <p
        className="max-w-xl mx-auto text-xs md:text-lg text-neutral-900 text-center tracking-tight">
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
