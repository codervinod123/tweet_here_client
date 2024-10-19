import axios from "axios";

async function useCreateTweet() {
  try {
    const formData = new FormData();
    formData.append("content", "hello vinod bhai how are you bro");
    const databaseURL = import.meta.env.VITE_BACKEND_URL;
    await axios.post(`${databaseURL}/api/v1/tweet/tweet`, formData);
  } catch (error) {
    console.log("Error occured", error);
    return error;
  }
}

export default useCreateTweet;
