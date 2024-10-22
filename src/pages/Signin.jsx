import Auth from "../components/Auth";
import Quote from "../components/Quote";

const Signin = () => {
  return (
    <div className="flex flex-col w-screen bg-gray-200 justify-between lg:flex-row lg:h-screen">
      <div className="flex justify-center items-center w-screen">
        <Auth comp={"signin"} />
      </div>
      <div className="flex justify-center items-center w-screen">
        <Quote />
      </div>
    </div>
  );
};

export default Signin;
