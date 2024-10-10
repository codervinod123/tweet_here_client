import { useEffect } from 'react';
import axios from 'axios';

// Custom hook to run a function only on initial render
const useInitialRender = () => {
  useEffect(() => {
    getData();
  }, []); 

  const getData=async()=>{
    const response= await axios.get("http://localhost:3001/api/v1/tweet");
    return response.data.data;
  }
};

export default useInitialRender;
