import { useEffect, useState } from "react";
import axios from "axios";

// Custom hook to run a function only on initial render
const useAPI = (endPoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [endPoint]);
  const getData = async () => {
    setLoading(true);
    const databaseURL = import.meta.env.VITE_BACKEND_URL;
    const response = await axios.get(`${databaseURL}${endPoint}`);
    setData(response.data.data);
    setLoading(false);
    return response.data.data;
  };
  return { data, loading };
};

export default useAPI;
