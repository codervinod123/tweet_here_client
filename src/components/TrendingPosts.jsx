import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PostCard from "./PostCard";
import { Spin } from "antd";
import axios from "axios";
import useAPI from "../hooks/useApiCall";

const TrendingPosts = () => {
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

export default TrendingPosts;
