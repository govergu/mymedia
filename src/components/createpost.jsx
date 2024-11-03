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
    <form className="create-post">
      <div className="mb-3">
        <label htmlFor="userid" className="form-label">
          UserName
        </label>
        <input type="text" className="form-control" ref={postUser} />
      </div>
      <div className="mb-3">
        <label htmlFor="Title" className="form-label">
          Title
        </label>
        <input type="text" className="form-control" ref={postTitle} />
      </div>
      <div className="mb-3">
        <label htmlFor="Body" className="form-label">
          Body
        </label>
        <textarea
          name=""
          id=""
          className="form-control"
          placeholder="Enter your text"
          ref={postContent}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="tags">Tags</label>
        <input
          type="text"
          placeholder="Tags..."
          className="form-control"
          ref={postTags}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="views">Views</label>
        <input
          type="number"
          placeholder="Number of Views"
          className="form-control"
          ref={postViews}
        />
      </div>

      <button type="submit" className="btn btn-primary" onClick={AddNewPost}>
        Create Post
      </button>
    </form>
  );
};

export default CreatePost;
