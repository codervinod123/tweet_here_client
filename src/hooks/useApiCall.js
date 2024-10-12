import { useEffect, useState } from "react";
import axios from "axios";

// Custom hook to run a function only on initial render
const useAPI = (endPoint) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const databaseURL = import.meta.env.VITE_BACKEND_URL;
    const response = await axios.get(`${databaseURL}${endPoint}`);
    setData(response.data.data);
    return response.data.data;
  };
  return { data };
};

export default useAPI;
