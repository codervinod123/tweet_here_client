import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const ProfileOverview = () => {

  const navigate = useNavigate();
  const handleLogout= () =>{
    localStorage.clear("token");
    navigate("/signin");
  }


  return (
    <nav className="">
      <div className="h-full flex flex-col">
        <div className="bg-white rounded-md bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsIz4qZKTOplGKCIt860B8HP3mTBMZGACNFg&s')] bg-no-repeat bg-[length:100%_10%] bg-top">
          <div className="flex justify-center pt-[18%]">
            <img
              className="border-2 border-white rounded"
              height={65}
              width={65}
              src="https://social-react-sb.vercel.app/assets/07-DLMl_mTI.jpg"
              alt="profile-pic"
            />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-black text-xl">Sam Lanson</h1>
            <p className="text-gray-600 text-sm font-semibold">
              Web Developer at Webestica
            </p>
          </div>
          <p className="text-center text-sm text-gray-600 font-semibold py-4 px-4 leading-5">
            I&apos;d love to change the world, but they won’t give me the source
            code.
          </p>

          <div className="flex justify-center gap-x-4">
            <div className="flex flex-col items-center">
              <h6 className="font-bold text-gray-900">256</h6>
              <small className="font-semibold text-gray-700">Posts</small>
            </div>
            <div className="h-12 border-l-[2px] border-gray-500"></div>
            <div className="flex flex-col items-center">
              <h6 className="font-bold text-gray-900">12.5K</h6>
              <small className="font-semibold text-gray-700">Follower</small>
            </div>
            <div className="h-12 border-l-[2px] border-gray-500"></div>
            <div className="flex flex-col items-center">
              <h6 className="font-bold text-gray-900">345</h6>
              <small className="font-semibold text-gray-700">Following</small>
            </div>
          </div>

          <div className="px-4 my-4">
            <div className="border-t-[1px] border-gray-400"></div>
          </div>

          <ul className="px-4 flex flex-col gap-4">
            <li>
              <div className="flex gap-2">
                <span>🏠</span>
                <h5 className="font-semibold text-gray-900">Feed</h5>
              </div>
            </li>
            <li>
              <div className="flex gap-2">
                <span>🧞‍♀️</span>
                <h5 className="font-semibold text-gray-900">Connections</h5>
              </div>
            </li>
            <li>
              <div className="flex gap-2">
                <span>🌏</span>
                <h5 className="font-semibold text-gray-900">Latest News</h5>
              </div>
            </li>
            <li>
              <div className="flex gap-2">
                <span>📆</span>
                <h5 className="font-semibold text-gray-900">Events</h5>
              </div>
            </li>
            <li>
              <div className="flex gap-2">
                <span>🗨️</span>
                <h5 className="font-semibold text-gray-900">Groups</h5>
              </div>
            </li>
            <li>
              <div className="flex gap-2">
                <span>🔔</span>
                <h5 className="font-semibold text-gray-900">Notifications</h5>
              </div>
            </li>
            <li>
              <div className="flex gap-2">
                <span>🧭</span>
                <h5 className="font-semibold text-gray-900">Settings</h5>
              </div>
            </li>
            <li>
              <button onClick={handleLogout} className="flex items-center gap-2 border bg-gray-500 rounded-md px-2 py-1 text-white">
                <span>
                  <CiLogout />
                </span>
                <h5 className="font-semibold">Logout</h5>
              </button>
            </li>
          </ul>

          <div className="my-4">
            <div className="border-t-[1px] border-gray-400"></div>
          </div>

          <p className="text-blue-600 text-center text-sm font-semibold mb-4 cursor-pointer">
            View Profile
          </p>
        </div>
        <ul className="flex flex-wrap px-4 justify-center gap-x-4 pt-4 text-gray-600 font-semibold">
          <li>About</li>
          <li>Setting</li>
          <li>Support</li>
          <li>Docs</li>
          <li>Help</li>
          <li>Privacy & Terms</li>
        </ul>
        <p className="text-gray-500 text-center text-sm font-semibold">
          &copy; 2024 Tweet Here
        </p>
      </div>
    </nav>
  );
};

export default ProfileOverview;
