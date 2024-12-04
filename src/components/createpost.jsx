import { useContext, useRef, useState } from "react";
import { PostLists } from "../store/postlistProvider";

const CreatePost = () => {
  const { addNewPost } = useContext(PostLists);
  const postUser = useRef("");
  const postTitle = useRef("");
  const postContent = useRef("");
  const postTags = useRef("");
  const postViews = useRef("");

  const AddNewPost = () => {
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: postUser,
        title: postTitle,
        body: postContent,
        tags: postTags,
        views: postViews,
      }),
    })
      .then((res) => res.json())

      .then(console.log);

    addNewPost(
      postUser.current.value,
      postTitle.current.value,
      postContent.current.value,
      postTags.current.value.split(" "),
      postViews.current.value
    );
    postUser.current.value = "";
    postTitle.current.value = "";
    postContent.current.value = "";
    postTags.current.value = "";
    postViews.current.value = "";
  };

  return (
    <form classNameName="create-post">
      <div classNameName="mb-3">
        <label htmlFor="userid" classNameName="form-label">
          UserName
        </label>
        <input type="text" classNameName="form-control" ref={postUser} />
      </div>
      <div classNameName="mb-3">
        <label htmlFor="Title" classNameName="form-label">
          Title
        </label>
        <input type="text" classNameName="form-control" ref={postTitle} />
      </div>
      <div classNameName="mb-3">
        <label htmlFor="Body" classNameName="form-label">
          Body
        </label>
        <textarea
          name=""
          id=""
          classNameName="form-control"
          placeholder="Enter your text"
          ref={postContent}
        ></textarea>
      </div>
      <div classNameName="mb-3">
        <label htmlFor="tags">Tags</label>
        <input
          type="text"
          placeholder="Tags..."
          classNameName="form-control"
          ref={postTags}
        />
      </div>
      <div classNameName="mb-3">
        <label htmlFor="views">Views</label>
        <input
          type="number"
          placeholder="Number of Views"
          classNameName="form-control"
          ref={postViews}
        />
      </div>

      <button
        type="submit"
        classNameName="btn btn-primary"
        onClick={AddNewPost}
      >
        Create Post
      </button>
    </form>
  );
};

export default CreatePost;
