const Trending = () => {
  
  return (
    <div className="rounded-md bg-white py-4 px-4">
            <div className="leading-2">
              <div className="flex flex-col leading-4 cursor-pointer">
                <span className="text-gray-500 text-[12px] flex flex-col gap-y-1">
                  Trending in INDIA
                </span>
                <div className="flex justify-between">
                  <span className="font-semibold">#something</span>
                  <span className="text-gray-500 text-[12px] flex flex-col gap-y-1">
                   23 posts
                  </span>
                </div>
              </div>
            </div>
      </div>
    );
};

export default Trending;