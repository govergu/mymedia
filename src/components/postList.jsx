import { useContext } from "react";
import Post from "./post";
import { PostLists } from "../store/postlistProvider";

const PostList = () => {
  const { postlist } = useContext(PostLists);
  return (
    <>
      {postlist.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
