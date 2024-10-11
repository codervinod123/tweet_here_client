import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Auth = ({ comp }) => {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
    name: "",
  });

  const databaseURL = import.meta.env.VITE_BACKEND_URL;
  const sendRequest = async () => {
    try {
      const response = await axios.post(
        `${databaseURL}/api/v1/${comp == "signup" ? "user" : "login"}`,
        formdata,
      );
      localStorage.setItem("token", response.data.token);
      navigate("/home");
      setFormdata({
        email: "",
        password: "",
        name: "",
      });
    } catch (error) {
      // handle it gracefully
      console.log("error occures", error);
    }
  };

  return (
    <div className="h-screen flex justify-center flex-col ">
      <div className="flex flex-col gap-2 justify-center w-full px-16">
        <h4 className="text-3xl font-bold">
          {comp == "signin" ? "Login to Account" : "Create an Account"}
        </h4>
        <span className="font-semibold text-gray-600">
          {comp == "signup"
            ? "Already Have an Account?"
            : "Don't Have an Account?"}
          <Link
            className="pl-2 underline"
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
            handleChange={(e) => {
              setFormdata({
                ...formdata,
                password: e.target.value,
              });
            }}
          />
        </div>

        <div>
          <button
            onClick={sendRequest}
            type="button"
            className="w-full text-gray-900 bg-gradient-to-r from-teal-400 to-lime-400 hover:bg-gradient-to-l hover:from-teal-400 hover:to-lime-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-all duration-500"
          >
            {comp == "signup" ? "Signup" : "Signin"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;

function LabelledInput({ placeholder, label, handleChange, type }) {
  return (
    <div>
      <label htmlFor="name" className="block mb-1 text-sm font-medium">
        {label}
      </label>
      <input
        onChange={handleChange}
        type={type == "password" ? "password" : "text"}
        id="name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
