import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import ProfileOverview from "./ProfileOverview";
import Suggestions from "./Suggestions";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRecoilState } from "recoil";

import { LoginUser } from "../store/userprofile";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
    }
    // eslint-disable-next-line
    loginuser();
  }, []);
  
   const [loginUser, setLoginUser] = useRecoilState(LoginUser);
  
  
    const loginuser = async() =>{
      const user  = await axios.get("http://localhost:3000/api/v1/user/currentloginuser", {headers:{ token: localStorage.getItem("token") }});
      setLoginUser(user.data.data);
    }

  return (
      <div className="w-screen flex justify-center px-4 lg:px-20">
        <div className="flex flex-col lg:grid lg:grid-cols-8 max-w-[1200px] lg:gap-8 lg:my-6 w-full">
          <div className="col-span-2 hidden lg:grid">
            <ProfileOverview />
          </div>
          <div className="py-4 col-span-4 lg:px-0 lg:py-0">
            <Outlet />
          </div>
          <div className="col-span-2 hidden lg:grid">
            <Suggestions />
          </div>
        </div>
      </div>
  );
};

export default Home;
