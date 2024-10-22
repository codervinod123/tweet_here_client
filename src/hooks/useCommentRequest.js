import axios from "axios";

const useCommentRequest = async (modelId, comment, endPoint) => {
  const databaseURL = import.meta.env.VITE_BACKEND_URL;
  const token = localStorage.getItem("token");
  const response = await axios.post(
    `${databaseURL}${endPoint}`,
    { commentItem: comment },
    {
      headers: {
        modelname: "Tweet",
        modelid: modelId,
        token: token,
      },
    },
  );

  return { response };
};

export default useCommentRequest;
