import axios from "axios";

async function useCreateTweet() {
  try {
      const formData = new FormData();
      formData.append("content", "hello vinod bhai how are you bro");
      await axios.post("http://localhost:3001/api/v1/tweet",formData);
  } catch (error) {
    console.log("Error occured", error);
    return error;
  }
}

export default useCreateTweet;
