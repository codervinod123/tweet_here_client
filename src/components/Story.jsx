import React, { useEffect, useRef, useState } from 'react'
import { BsPlus } from "react-icons/bs";
import "./global.css";
import axios from 'axios';
import { Modal, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { toast } from 'react-toastify';
import { GrNext } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
import { GrPrevious } from "react-icons/gr";

const Story = () => {

   const [loading, setLoading] = useState(false);
   const [stories, setStories] = useState([]);
   const [story, setStory] = useState({
      preview: null,
      data: null
   });

   const handleImageUpload = (e) => {
      setStory({
         preview: URL.createObjectURL(e.target.files[0]),
         data: e.target.files[0]
      });
      console.log("fileeeeeeeeeeee", e.target.files[0]);
   }

   const sendStoryRequest = async () => {
      const databaseURL = import.meta.env.VITE_BACKEND_URL;
      const formData = new FormData();
      formData.append("file", story.data);
      const token = localStorage.getItem("token");
      setLoading(true);
      const response = await axios.post(`${databaseURL}/api/v1/story`, formData, {
         headers: {
            token
         }
      });
      setLoading(false);
      setStories([response.data.data, ...stories]);
      toast.success("Story Added");
      setStory({
         preview: null,
         data: null
      });
   }

   useEffect(() => {
      getStories();
   }, [])

   const getStories = async () => {
      const databaseURL = import.meta.env.VITE_BACKEND_URL;
      const response = await axios.get(`${databaseURL}/api/v1/story`);
      setStories(response.data.data);
   }

   const storyRef = useRef();
   const [page, setPage] = useState(null);
   const handleStoryView = (index) => {
      setPage(index);
      storyRef.current.showModal();
   }


   return (
      <div className='flex flex-nowrap gap-4 pb-2 w-full'>
         {
            story.preview ?
               <div className='flex flex-col gap-1'>
                  <div className='w-[80px] h-[120px] rounded-sm bg-white flex items-center justify-center'>
                     {loading ?
                        <Spin indicator={<LoadingOutlined spin />} size="large" />
                        :
                        <span><img className='rounded-sm' src={story.preview} alt="story1" /></span>
                     }
                  </div>
                  <button onClick={sendStoryRequest} className='bg-gray-400 px-1 text-gray-800 rounded-md'>Post</button>
               </div>
               :
               <label htmlFor="story">
                  <div className='w-[80px] cursor-pointer h-[120px] rounded-sm bg-white flex flex-col items-center justify-center'>
                     <div className='flex flex-col items-center justify-center'>
                        <div className='p-2 rounded-full bg-gray-300 '>
                           <BsPlus />
                        </div>
                        <input onChange={handleImageUpload} id="story" type="file" className='hidden' />
                        <span className='text-xs'>Add story</span>
                     </div>
                  </div>
               </label>
         }

         <div className='grid gap-4 pb-2 w-full overflow-x-auto'>
            <div className="flex gap-4">
               {
                  stories.map((story, index) => {
                     return (
                        <div key={index} onClick={()=>handleStoryView(index)} className='w-[80px] h-[120px] rounded-sm bg-white flex items-center justify-center  border-2 border-blue-300 cursor-pointer'>
                           <span><img className='rounded-sm' src={story.content} alt="story1" /></span>
                        </div>
                     )
                  })
               }
            </div>
            <dialog ref={storyRef} className='outline-none rounded-md'>
               <StoryModal reference={storyRef} stories={stories} page={page} setPage={setPage}/>
            </dialog>
         </div>
      </div>
   )
}

export default Story




const StoryModal = ({ reference, stories, page, setPage }) => {
    
   const handleClose = () => {
      reference.current.close();
   };

   const nextStory=()=>{
      if(page==stories.length-1){
         reference.current.close();
         setPage(null);
         return;
      }
      setPage(page=>page+1);
   };

   const prevStory=()=>{
      if(page==0){
         reference.current.close();
         setPage(null);
         return;
      }
      setPage(page=>page-1);
   };

   let storyViewTimer;
   useEffect(()=>{
      if (reference.current?.open) {

         if(page==stories.length){
            clearInterval(storyViewTimer);
            reference.current.close();
            setPage(null);
            return;
         }

         storyViewTimer = setInterval(() => {
            setPage((page) => page + 1);
         }, 12000);
   
         return () => {
            clearInterval(storyViewTimer); // Clear interval on cleanup
         };
      }
   },[reference, page]);

   return (
      <div className='h-[90vh] w-[90vw] overflow-hidden px-4 rounded-md border border-black'>
        
         <div className='flex justify-end mt-1'>
           <span onClick={handleClose} className='p-2 bg-gray-400 rounded-full cursor-pointer hover:bg-gray-300 transition-all duration-500'>
             <RxCross2 size={"1.5rem"} />
           </span>
         </div>

         <div className=' flex justify-between items-center px-4'>
            <span onClick={prevStory} className='bg-gray-400 p-3 rounded-full text-white font-bold cursor-pointer flex items-center justify-center hover:bg-gray-300 transition-all duration-500'>
               <GrPrevious />
            </span>
            {
               stories.map((story, index) => {
                  return (
                     <React.Fragment key={index}>
                        {
                           page == index &&
                           <div className='flex justify-center flex-col gap-4 rounded-md'>
                              <div className="h-1 w-full bg-gray-200 rounded-full mt-[-30px] overflow-hidden">
                                 <div className="h-full bg-blue-500 w-0 animate-fill"></div>
                              </div>
                              <div key={index} className='w-full flex justify-center rounded-md'>
                                 <img className='rounded-md w-[70%]' src={story.content} alt="story" />
                              </div>
                           </div>
                        }
                     </React.Fragment>
                  )
               })
            }
            <span onClick={nextStory} className='bg-gray-400 p-3 rounded-full text-white font-bold cursor-pointer flex items-center justify-center hover:bg-gray-300 transition-all duration-500'>
               <GrNext />
            </span>
         </div>

      </div>
   )
}


