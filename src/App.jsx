import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Posts from "./components/Posts";
import TrendingPosts from "./components/TrendingPosts";
import PostCard from "./components/PostCard";
import ErrorPage from "./components/ErrorPage";
import LandingScreen from "./components/LandingScreen";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const appRouter = createBrowserRouter([
  {
    path: "",
    element: <LandingScreen />,
    children: [],
  },
  {
    path: "/signup",
    element: <Signup />,
    children: [],
  },
  {
    path: "/signin",
    element: <Signin />,
    children: [],
  },
  {
    path: "/home",
    element: <Navbar />,
    children: [
      {
        path: "/home",
        element: <Home />,
        children: [
          {
            path: "",
            element: <Posts />,
            children: [
              {
                path: "",
                element: <PostCard />,
                children: [],
              },
              {
                path: "trending",
                element: <TrendingPosts />,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />, // 404 Not Found page
  },
]);

const App = () => {
  return (
    <div className="bg-gray-200">
      <RouterProvider router={appRouter} />
      <ToastContainer />
    </div>
  );
};

export default App;
