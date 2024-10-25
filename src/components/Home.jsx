import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import ProfileOverview from "./ProfileOverview";
import Suggestions from "./Suggestions";
import { useNavigate } from "react-router-dom";

import { RecoilRoot } from "recoil";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <RecoilRoot>
    <div className="">
      <div className="flex flex-col lg:grid lg:grid-cols-8 lg:px-20 lg:gap-8 lg:my-6">
        <div className="col-span-2 hidden lg:grid">
          <ProfileOverview />
        </div>
        <div className="px-4 py-4 col-span-4 lg:px-0 lg:py-0">
          <Outlet />
        </div>
        <div className="col-span-2 hidden lg:grid">
          <Suggestions />
        </div>
      </div>
    </div>
  </RecoilRoot>
  );
};

export default Home;
