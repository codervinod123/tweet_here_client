import { useEffect, useState } from "react";
import useAPI from "../hooks/useApiCall";
import { Spin } from "antd";
import PostCard from "./PostCard";
import axios from "axios";

const PostsContainer = () => {
 
  const [commentData, setCommentData] = useState([]);
  useEffect(()=>{
    getCommentData();
  },[])

  const getCommentData = async () => {
    const data= await axios.get("http://localhost:3001/api/v1/tweet/comment");
    console.log("data is", data.data.response);
    setCommentData(data.data.response);
  }
  const { data } = useAPI("/api/v1/tweet");

  return !data ? (
    <div className="flex justify-center pt-6">
      <Spin />
    </div>
    ) : (
    <>
       {
         data.map((tweet)=>{

          const commentMal=commentData.filter((comment) => comment.commentable === tweet._id);

         return(
              <PostCard key={tweet._id} tweet={tweet} commentMal={commentMal} />
           )
         })
       }
    </>
  )
}

export default PostsContainer;
