import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import { Link } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";

export function ErrorPage() {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex flex-col gap-6 items-center justify-center font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <h1 className="text-white font-semibold text-[35px] md:text-[50px] lg:text-[70px]">404</h1>
        <div>
          <span className="text-white text-[20px] md:text-[30px] lg:text-[50px]">
            oops something went wrong
          </span>
        </div>
        <Link to={"/"}>
          <button className="flex items-center text-[1.2rem] gap-x-2 px-4 py-2 rounded text-purple-600">
            Back To Home
            <IoHomeSharp size={"1.2rem"} />
          </button>
        </Link>
      </div>
    </BackgroundGradientAnimation>
  );
}
