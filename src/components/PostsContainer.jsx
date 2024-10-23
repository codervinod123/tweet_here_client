import { useEffect, useState } from "react";
import useAPI from "../hooks/useApiCall";
import { Spin } from "antd";
import PostCard from "./PostCard";
import { newPost } from "./Posts";

import { useRecoilValue } from "recoil";

const PostsContainer = () => {

  const [page, setPage]=useState(1);
  const recoilPost=useRecoilValue(newPost);

  const { data, loading } = useAPI(`/api/v1/tweet?page=${page}`);
  
  const handleScroll=()=>{
    const total=document?.documentElement?.scrollHeight;
    const innerHeight=window?.innerHeight;
    const scrolled=document?.documentElement?.scrollTop;

    if(innerHeight+scrolled+1>total){
      setPage(page=>page+1);
    }
}

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [page]);
  

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
