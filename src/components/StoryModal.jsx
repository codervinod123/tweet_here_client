import React, { useEffect } from 'react'
import "./global.css";
import { GrNext } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
import { GrPrevious } from "react-icons/gr";

const StoryModal = ({ reference, stories, page, setPage }) => {
     console.log("Stories", stories);
    const handleClose = () => {
       reference.current.close();
    };
 
    const nextStory = () => {
       if (page == stories.length - 1) {
          reference.current.close();
          setPage(null);
          return;
       }
       setPage(page => page + 1);
    };
 
    const prevStory = () => {
       if (page == 0) {
          reference.current.close();
          setPage(null);
          return;
       }
       setPage(page => page - 1);
    };
 
    let storyViewTimer;
 
    useEffect(() => {
       if (reference.current?.open) {
          if (page == stories.length) {
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
    }, [reference, page]);
 
    return (
       <div onClick={handleClose} className='fixed inset-0 flex justify-center items-center transition-colors m-8 bg-gray-200/90'>
          <div className='absolute top-2 right-2'>
             <button onClick={handleClose} className='p-1 rounded-full outline-none bg-gray-400/50 hover:bg-gray-300 transition-all duration-500'>
                <RxCross2 size={"1.5rem"} color='red' />
             </button>
          </div>
          <div onClick={(e) => e.stopPropagation()} className='mx-8 my-8'>
             <div className='flex gap-4 justify-between items-center'>
                <button onClick={prevStory} className='bg-gray-400 p-2 rounded-full text-white font-bold cursor-pointer flex items-center justify-center hover:bg-gray-400/70 transition-all duration-500'>
                   <GrPrevious />
                </button>
                <div>
                   {
                      stories.map((story, index) => {
                         return (
                            <React.Fragment key={index}>
                               {
                                  page == index &&
                                  <div className='flex justify-center flex-col gap-4 rounded-md'>
                                      <div className=''>
                                        <span className='text-blue-500 font-medium'>{story.author.name}</span>
                                      </div>
                                     <div className="h-1 w-full bg-gray-300 rounded-full overflow-hidden">
                                        <div className="h-full bg-blue-500 w-0 animate-fill"></div>
                                     </div>
                                     <div>
                                       <img className='rounded w-96 max-h-[75vh]' src={story.content} alt={story.content} />
                                     </div>
                                  </div>
                               }
                            </React.Fragment>
                         )
                      })
                   }
                </div>
                <button onClick={nextStory} className='bg-gray-400 p-2 rounded-full text-white font-bold cursor-pointer flex items-center justify-center hover:bg-gray-400/70 transition-all duration-500'>
                   <GrNext />
                </button>
             </div>
          </div>
       </div>
    )
 }
 

 export default StoryModal;
 
 