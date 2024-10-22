import { Outlet } from "react-router-dom";
import CreatePost from "./CreatePost";
import { RecoilRoot, atom } from "recoil";

export const newPost = atom({
  key: 'OptimisticPost', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

const Posts = () => {
  return (
    <RecoilRoot>
      <div className="flex flex-col gap-4">
        <CreatePost />
        <Outlet />
      </div>
    </RecoilRoot>
  );
};

export default Posts;
