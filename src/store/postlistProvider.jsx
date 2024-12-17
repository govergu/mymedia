import { createContext, useReducer, useState, useEffect } from "react";

export const PostLists = createContext({
  postlist: [],
  fetching: false,
  addNewPost: () => {},
  deletePost: () => {},
});

//this is a pure function for reducer
const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_NEW_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "FETCH_POSTS") {
    newPostList = action.payload.posts;
  }

  return newPostList;
};

//this is a component
const PostListProvider = ({ children }) => {
  //this is reducer defined
  const [postlist, dispatchPost] = useReducer(postListReducer, []);
  const [fetching, setfetching] = useState(false);

  //these are methods that include actions to be dispatched
  const addNewPost = (post) => {
    dispatchPost({
      type: "ADD_NEW_POST",
      payload: post,
    });
  };

  const FetchInitialPosts = (posts) => {
    dispatchPost({ type: "FETCH_POSTS", payload: { posts } });
  };

  const deletePost = (postId) => {
    dispatchPost({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  //Called use Effect Here that fetch the data from API and send that data through a method *FetchIniatialPosts*
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setfetching(true);
    fetch("https://dummyjson.com/posts", {})
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
    <PostLists.Provider value={{ postlist, addNewPost, deletePost, fetching }}>
      {children}
    </PostLists.Provider>
  );
};

// //this is a function/array defined as initial data
// const DEFAULT_POST_LIST = [
//   {
//     id: "1",
//     title: "Way to learn react",
//     body: "Yo! React, How is going my learning!",
//     views: 2,
//     tags: ["react", "js"],
//     userId: "user-101",
//   },
// ];

export default PostListProvider;
