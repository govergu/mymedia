import { useContext, useEffect, useState } from "react";
import Post from "./post";
import { PostLists } from "../store/postlistProvider";
import WelcomeMessage from "./welcome";
import Loading from "./loading";

const PostList = () => {
  const { postlist, fetching } = useContext(PostLists);

  return (
    <>
      {fetching && <Loading />}
      {!fetching && postlist.length === 0 && <WelcomeMessage />}
      {!fetching && postlist.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
