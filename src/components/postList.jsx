import { useContext, useEffect, useState } from "react";
import Post from "./post";
import { PostLists } from "../store/postlistProvider";
import WelcomeMessage from "./welcome";
import Loading from "./loading";

const PostList = () => {
  const { postlist, FetchInitialPosts } = useContext(PostLists);
  const [fetching, setfetching] = useState(false);
  //Called use Effect Here that fetch the data from API and send that data through a method *FetchIniatialPosts*
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setfetching(true);
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        FetchInitialPosts(data.posts);
        setfetching(false);
      });
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      {fetching && <Loading />}
      {!fetching && postlist.length === 0 && <WelcomeMessage />}
      {!fetching && postlist.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
