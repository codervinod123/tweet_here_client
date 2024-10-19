import useAPI from "../hooks/useApiCall";
import { Spin } from "antd";
import PostCard from "./PostCard";

const PostsContainer = () => {
  const { data } = useAPI("/api/v1/tweet");

  return !data ? (
    <div className="flex justify-center pt-6">
      <Spin />
    </div>
  ) : (
    <>
      {data.map((tweet) => {
        return <PostCard key={tweet._id} tweet={tweet} />;
      })}
    </>
  );
};

export default PostsContainer;
