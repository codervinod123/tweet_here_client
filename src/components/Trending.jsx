import { useState } from "react";
import { Link } from "react-router-dom";
import useAPI from "../hooks/useApiCall";

const Trending = () => {

  const [page, setPage] = useState(1);

  const { data } = useAPI(`/api/v1/trending/bulk?page=${page}`);

  const loadNext=()=>{
    setPage(page+1);
  }

  return (
    <div className="rounded-md bg-white py-4 px-4">
      <div className="leading-2 flex flex-col gap-2">
        {data && data?.map((trend) => {
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
     <div className="flex flex-col my-2 cursor-pointer">
       <button onClick={loadNext} className="px-2 py-1 bg-gray-400 rounded font-bold text-gray-800">Load More</button>
     </div>
    </div>
  );
};

export default Trending;
