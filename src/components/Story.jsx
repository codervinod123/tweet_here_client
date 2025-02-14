import { useEffect, useRef, useState } from "react";
import { BsPlus } from "react-icons/bs";
import "./global.css";
import axios from "axios";
import { Spin } from "antd";
import { toast } from "react-toastify";
import StoryModal from "./StoryModal";

const Story = () => {
  const [loading, setLoading] = useState(false);
  const [stories, setStories] = useState([]);
  const [story, setStory] = useState({
    preview: null,
    data: null,
  });

  const handleImageUpload = (e) => {
    setStory({
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    });
  };

  const sendStoryRequest = async () => {
    const databaseURL = import.meta.env.VITE_BACKEND_URL;
    const formData = new FormData();
    formData.append("file", story.data);
    const token = localStorage.getItem("token");
    setLoading(true);
    const response = await axios.post(`${databaseURL}/api/v1/story`, formData, {
      headers: {
        token,
      },
    });
    setLoading(false);
    setStories([response.data.data, ...stories]);
    toast.success("Story Added");
    setStory({
      preview: null,
      data: null,
    });
  };

  useEffect(() => {
    getStories();
  }, []);

  const getStories = async () => {
    const databaseURL = import.meta.env.VITE_BACKEND_URL;
    const response = await axios.get(`${databaseURL}/api/v1/story`);
    setStories(response.data.data);
  };

  const storyRef = useRef();
  const [page, setPage] = useState(null);

  const handleStoryView = (index) => {
    setPage(index);
    storyRef.current.showModal();
  };

  return (
    <div className="flex flex-nowrap gap-4 pb-2 w-full">
      {story.preview ? (
        <div className="flex flex-col gap-1">
          <div className="w-[80px] h-[120px] rounded-sm bg-white flex items-center justify-center">
            {loading ? (
              <Spin indicator={<Spin />} size="small" />
            ) : (
              <span>
                <img className="rounded-sm" src={story.preview} alt="story1" />
              </span>
            )}
          </div>
          <button
            onClick={sendStoryRequest}
            className="bg-gray-400 px-1 text-gray-800 rounded-md"
          >
            Post
          </button>
        </div>
      ) : (
        <label htmlFor="story">
          <div className="w-[80px] cursor-pointer h-[120px] rounded-sm bg-white flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <div className="p-2 rounded-full bg-gray-300 ">
                <BsPlus />
              </div>
              <input
                onChange={handleImageUpload}
                id="story"
                type="file"
                className="hidden"
              />
              <span className="text-xs">Add story</span>
            </div>
          </div>
        </label>
      )}

      <div className="grid gap-4 pb-2 w-full overflow-x-auto">
        <div className="flex gap-4">
          {stories.map((story, index) => {
            return (
              <div
                key={index}
                onClick={() => handleStoryView(index)}
                className="w-[80px] h-[120px] rounded-sm bg-white flex items-center justify-center border-2 border-blue-300 cursor-pointer"
              >
                <span>
                  <img className="cover" src={story.content} alt="story1" />
                </span>
              </div>
            );
          })}
        </div>
        <dialog ref={storyRef} className="outline-none rounded">
          <StoryModal
            reference={storyRef}
            stories={stories}
            page={page}
            setPage={setPage}
          />
        </dialog>
      </div>
    </div>
  );
};

export default Story;
