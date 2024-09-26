import { useState } from "react";
import { FaImage } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa6";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { MdEmojiEmotions } from "react-icons/md";
import { Spin } from "antd";
import axios from "axios";

const CreatePost = () => {

  const [image,setImage]=useState({
     preview:null,
     dbImage:null
  })
  const [content,setContent]=useState("");
  const [loading, setLoading]=useState(false);
  const handleInputChange=(e)=>{
    setContent(e.target.value);
  }
  const handleImageChange=(e)=>{
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      dbImage: e.target.files[0],
    };
    setImage(img);
  }
  const handleSubmitForm=async()=>{
     const formData=new FormData();
     formData.append("content",content);
     formData.append("file",image.dbImage);
     setLoading(true);
     const response=await axios.post("http://localhost:3001/api/v1/tweet", formData);
     if(response){
         setLoading(false);
     }
     console.log(response);
     setImage({ preview: "", data: "" });
     setContent("");
  }

  return loading ? 
  <div className="bg-white flex justify-center items-center rounded-md py-8">
     <Spin/>
  </div>
  : (
    <div className="py-4 bg-white rounded-md">
      <div className="flex px-8 gap-x-4">
        <div className="rounded-full">
          <span className="rounded-full">
            <img
              className="rounded-full"
              height={45}
              width={45}
              src="https://social-react-sb.vercel.app/assets/07-DLMl_mTI.jpg"
              alt=""
            />
          </span>
        </div>
        <form className="w-full rounded">
          <textarea
            onChange={(e)=>handleInputChange(e)}
            value={content}
            rows={2}
            data-autoresize={true}
            placeholder="Share your Thoughts..."
            className="bg-[#ECFFE6] placeholder:text-gray-600 w-full rounded p-2 outline-none resize-none"
            name=""
            id=""
          ></textarea>
        </form>

      </div>
      <div className="w-full flex justify-center pl-[5.3rem] pr-[2rem]">
        {
          image.preview && 
          <div className="py-4">
            <img className="rounded-md" src={image.preview} alt="preview" />
          </div>
        }
      </div>
      <div className="flex justify-between px-8">
        <ul className="flex gap-4 py-4">
        <li className="bg-gray-200 rounded-sm px-[4px] py-[2px] cursor-pointer">
          <input onChange={(e)=>handleImageChange(e)} id="pc" type="file" className="hidden"/>
          <label htmlFor="pc" className="flex gap-x-2 text-sm items-center justify-center cursor-pointer">
            <FaImage color="#15B392" />
            Photos
          </label>
        </li>
        <li className="bg-gray-200 rounded-sm px-[4px] py-[2px] cursor-pointer">
          <span className="flex gap-x-2 text-sm items-center justify-center cursor-pointer">
            <FaVideo color="#00CCDD" />
            Vedio
          </span>
        </li>

        <li className="bg-gray-200 rounded-sm px-[4px] py-[2px] cursor-pointer">
          <span className="flex gap-x-2 text-sm items-center justify-center cursor-pointer">
            <BsFillCalendarDateFill color="#D91656" />
            Event
          </span>
        </li>

        <li className="bg-gray-200 rounded-sm px-[4px] py-[2px] cursor-pointer">
          <span className="flex gap-x-2 text-sm items-center justify-center cursor-pointer">
            <MdEmojiEmotions color="#FF7F3E" />
            Feeling/Activity
          </span>
        </li>
        </ul>
        <button onClick={handleSubmitForm}>Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
