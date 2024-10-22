import useAPI from "../hooks/useApiCall";
import { Spin } from "antd";
import PostCard from "./PostCard";
import { newPost } from "./Posts";

import { useRecoilState } from "recoil";

const PostsContainer = () => {
  const { data, loading } = useAPI("/api/v1/tweet");
   
  const [recoilPost, setRecoilPost]=useRecoilState(newPost);

  return loading ? (
    <div className="flex justify-center pt-6">
      <Spin />
    </div>
  ) : (
    <>
      {recoilPost.map((tweet) => {
        return <PostCard key={tweet._id} tweet={tweet} />;
      })}
      {data.map((tweet) => {
        return <PostCard key={tweet._id} tweet={tweet} />;
      })}
    </>
  );
};

export default PostsContainer;
