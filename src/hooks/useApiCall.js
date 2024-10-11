import { useEffect, useState } from "react";
import axios from "axios";

// Custom hook to run a function only on initial render
const useAPI = () => {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get("http://localhost:3001/api/v1/tweet");
    setTweets(response.data.data);
    return response.data.data;
  };

  return { tweets };
};

export default useAPI;
