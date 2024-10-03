import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Posts from "./components/Posts";
import TrendingPosts from "./components/TrendingPosts";
import PostCard from "./components/PostCard";
import ErrorPage from "./components/ErrorPage";
import LandingScreen from "./components/LandingScreen";

const appRouter = createBrowserRouter([
  {
    path: "",
    element: <LandingScreen />,
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
    </div>
  );
};

export default App;
