import CreatePost from "./CreatePost";
import PostCard from "./PostCard";
const Posts = () => {
  return (
    <div className="flex flex-col gap-4">
      <CreatePost />
      <PostCard />
    </div>
  );
};

export default Posts;
