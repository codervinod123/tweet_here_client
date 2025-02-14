import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Posts from "./components/Posts";
import TrendingPosts from "./components/TrendingPosts";
import { ErrorPage } from "./pages/ErrorPage";
import LandingScreen from "./components/LandingScreen";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import PostsContainer from "./components/PostsContainer";
import ProfileOverview from "./components/ProfileOverview";

import { createBrowserRouter } from "react-router-dom";
import MyPosts from "./components/MyPosts";

export const router = createBrowserRouter([
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
                element: <PostsContainer />,
                children: [],
              },
              {
                path: "trending",
                element: <TrendingPosts />,
                children: [],
              },
              {
                path: "posts/me",
                element: <MyPosts />,
                children: [],
              },
              {
                path: "profile/me",
                element: <ProfileOverview />,
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
