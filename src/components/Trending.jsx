import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Trending = () => {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    getAllTrending();
  }, []);

  const getAllTrending = async () => {
    const res = await axios.get("http://localhost:3001/api/v1/trending");
    setTrending(res.data.data);
  };

  return (
    <div className="rounded-md bg-white py-4 px-4">
      <div className="leading-2 flex flex-col gap-2">
        {trending.map((trend) => {
          return (
            <Link key={trend._id} to={"trending"} state={trend.tweets}>
              <div className="flex flex-col px-2 py-2 rounded-lg leading-4 cursor-pointer bg-gray-100 hover:bg-gray-200">
                <span className="text-gray-500 text-[12px] flex flex-col gap-y-1">
                  Trending in INDIA
                </span>
                <div className="flex justify-between">
                  <span className="font-semibold">
                    {trend.hashtag.slice(0, 16)}
                    {trend.hashtag.length > 16 ? "..." : ""}
                  </span>
                  <span className="text-gray-500 text-[12px] flex flex-col gap-y-1">
                    {trend.tweets.length} Posts
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
