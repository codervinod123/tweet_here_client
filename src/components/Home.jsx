import { Outlet } from "react-router-dom";
import ProfileOverview from "./ProfileOverview";
import Suggestions from "./Suggestions";

const Home = () => {
  return (
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
  );
};

export default Home;
