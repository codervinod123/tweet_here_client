import { Outlet } from "react-router-dom";
import CreatePost from "./CreatePost";
const Posts = () => {
  return (
    <div className="flex flex-col gap-4">
      <CreatePost />
      <Outlet />
    </div>
  );
};

export default Posts;
