import { IoHomeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="h-screen w-screen bg-blue-950 flex items-center justify-center">
      <div className="flex flex-col gap-6 items-center">
        <h1 className="text-[90px] font-semibold text-fuchsia-400">404</h1>
        <div>
          <span className="text-fuchsia-400">oops something went wrong</span>
        </div>
        <Link to="/">
          <button className="flex items-center text-fuchsia-400 gap-x-2 border border-gray-600 px-4 py-2 rounded">
            Back To Home
            <IoHomeSharp />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
