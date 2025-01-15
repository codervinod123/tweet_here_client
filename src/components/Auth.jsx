import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import { Spin } from "antd";

const Auth = ({ comp }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
    name: "",
  });

  const databaseURL = import.meta.env.VITE_BACKEND_URL;
  const sendRequest = async () => {
    if (!formdata.email && !formdata.password && !formdata.name) {
      toast.error("Login with id & Pass");
      return;
    }
    try {
      setLoader(true);
      const response = await axios.post(
        `${databaseURL}/api/v1/user/${comp == "signup" ? "signup" : "signin"}`,
        formdata,
      );

      if (response.status == 200) {
        setLoader(false);
      }
      console.log(response.data.data.user);
      localStorage.setItem("token", response.data.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.data.user));
      navigate("/home");
      setFormdata({
        email: "",
        password: "",
        name: "",
      });
    } catch (error) {
      // handle it gracefully
      toast.error("Please Check Userid & Password");
      setLoader(false);
      console.log("error occures", error);
    }
  };

  return (
    <div className="h-screen flex justify-center flex-col ">
      <div className="flex flex-col gap-2 justify-center w-full px-16">
        <h4 className="text-3xl font-bold">
          {comp == "signin" ? "Login to Account" : "Create an Account"}
        </h4>
        <span className=" text-gray-600 text-sm justify-center">
          {comp == "signup"
            ? "Already Have an Account?"
            : "Don't Have an Account?"}
          <Link
            className="pl-2 underline font-semibold"
            to={comp == "signup" ? "/signin" : "/signup"}
          >
            {comp == "signup" ? "Signin" : "Signup"}
          </Link>
        </span>
      </div>
      <div className="px-4 flex flex-col gap-4 pt-6">
        {comp == "signup" ? (
          <div>
            <LabelledInput
              placeholder={"Name"}
              label={"Name"}
              type={"text"}
              name={"name"}
              handleChange={(e) => {
                setFormdata({
                  ...formdata,
                  name: e.target.value,
                });
              }}
            />
          </div>
        ) : null}
        <div>
          <LabelledInput
            placeholder={"Email"}
            label={"Email"}
            type={"email"}
            name={"email"}
            handleChange={(e) => {
              setFormdata({
                ...formdata,
                email: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <LabelledInput
            placeholder={"Password"}
            label={"Password"}
            type={"password"}
            name={"password"}
            handleChange={(e) => {
              setFormdata({
                ...formdata,
                password: e.target.value,
              });
            }}
          />
        </div>

        <div onClick={sendRequest} className="w-full text-gray-900 cursor-pointer bg-gradient-to-r from-teal-400 to-lime-400 hover:bg-gradient-to-l hover:from-teal-400 hover:to-lime-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          {loader ? (
            <Spin indicator={<LoadingOutlined spin />} size="small" />
          ) : (
            <button type="button" className="">
              {comp == "signup" ? "Signup" : "Signin"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;

function LabelledInput({ placeholder, label, handleChange, type, name }) {
  return (
    <div>
      <label htmlFor="name" className="block mb-1 text-sm font-medium">
        {label}
      </label>
      <input
        onChange={handleChange}
        type={type == "password" ? "password" : "text"}
        id={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
