import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RecoilRoot } from "recoil";
import { router } from "./router";

const App = () => {
  return (
    <RecoilRoot>
      <div className="bg-gray-200">
        <RouterProvider router={router} />
        <ToastContainer />
      </div>
    </RecoilRoot>
  );
};

export default App;
