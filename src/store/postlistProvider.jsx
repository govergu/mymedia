import { act, createContext, useReducer } from "react";

export const PostLists = createContext({
  postlist: [],
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
  }

  return newPostList;
};

//this is a component
const PostListProvider = ({ children }) => {
  //this is reducer defined
  const [postlist, dispatchPost] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  //these are methods that include actions to be dispatched
  const addNewPost = (
    postUser,
    postTitle,
    postContent,
    postTags,
    postViews
  ) => {
    dispatchPost({
      type: "ADD_NEW_POST",
      payload: {
        id: Date.now(),
        userId: postUser,
        title: postTitle,
        body: postContent,
        tags: postTags,
        views: postViews,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPost({
      type: "DELETE_POST",
      payload: { postId },
    });
  };
  return (
    <PostLists.Provider value={{ postlist, addNewPost, deletePost }}>
      {children}
    </PostLists.Provider>
  );
};

//this is a function/array defined as initial data
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Way to learn react",
    body: "Yo! React, How is going my learning!",
    views: 2,
    tags: ["react", "js"],
    userId: "user-101",
  },
];

export default PostListProvider;