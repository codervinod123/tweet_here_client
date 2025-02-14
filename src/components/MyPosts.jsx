import { useLocation } from "react-router-dom";
import useAPI from "../hooks/useApiCall";
import PostCard from "./PostCard";
import { Spin } from "antd";

const MyPosts = () => {
  const location = useLocation();

  const ids = location.state.join(",");
  const { data, loading } = useAPI(`/api/v1/tweet/trendintweet?ids=${ids}`);

  return loading ? (
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

export default MyPosts;
