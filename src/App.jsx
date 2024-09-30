import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Posts from "./components/Posts";
import TrendingPosts from "./components/TrendingPosts";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <Posts />,
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
]);

const App = () => {
  return (
    <div className="bg-gray-200">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
