import { useEffect, useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import timeAgo from "../helper/duration-calculator";
import { SlLike } from "react-icons/sl";
import { FaComment } from "react-icons/fa6";
import { IoMdShareAlt } from "react-icons/io";
import { IoIosSend } from "react-icons/io";
import { useLocation } from "react-router-dom";
import PostCard from "./PostCard";
import axios from "axios";

const TrendingPosts = () => {
  const location = useLocation();
  const [tweet, setTweet] = useState(location.state);
  useEffect(() => {
    setTweet(location.state);
  }, [location.state]);

  return (
    <>
      {tweet &&
        tweet.map((tweet, index) => {
          return (
            <PostCard key={tweet._id} tweet={tweet} />
          );
        })}
    </>
  );
};

export default TrendingPosts;
