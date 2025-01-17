// import { useState, useEffect } from "react";
import Trending from "./Trending";
import FriendsSuggestion from "./FriendsSuggestion";


const Suggestions = () => {


  return (
    <div className="flex flex-col gap-4">
      <Trending />
      <FriendsSuggestion />
    </div>
  );
};

export default Suggestions;
