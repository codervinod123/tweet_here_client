import Auth from "../components/Auth";
import Quote from "../components/Quote";

const Signup = () => {
  return (
    <div className="flex w-screen h-screen bg-gray-200 justify-between">
        <div className="flex justify-center items-center w-screen h-screen">
            <Auth comp={"signup"} />
        </div>
        <div className="flex justify-center items-center w-screen h-screen">
           <Quote/>
        </div>
    </div>
  )
};

export default Signup;
