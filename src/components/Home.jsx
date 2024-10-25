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
    <div>
      <div className="grid grid-cols-8 px-20 gap-8 my-6">
        <div className="col-span-2">
          <ProfileOverview />
        </div>
        <div className="col-span-4">
          <Outlet />
        </div>
        <div className="col-span-2">
          <Suggestions />
        </div>
      </div>
      <div>b</div>
    </div>
  </RecoilRoot>
  );
};

export default Home;
