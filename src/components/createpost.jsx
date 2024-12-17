import { useContext, useRef } from "react";
import { PostLists } from "../store/postlistProvider";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { addNewPost } = useContext(PostLists);
  const postUser = useRef("");
  const postTitle = useRef("");
  const postContent = useRef("");
  const postTags = useRef("");
  const postViews = useRef("");
  const navigate = useNavigate();

  const AddNewPost = () => {
    const PostUser = postUser.current.value;
    const PostTitle = postTitle.current.value;
    const PostContent = postContent.current.value;
    const PostTags = postTags.current.value.split(" ");
    const PostViews = postViews.current.value;
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: PostUser,
        title: PostTitle,
        body: PostContent,
        tags: PostTags,
        views: PostViews,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        addNewPost(post), navigate("/");
      });

    postUser.current.value = "";
    postTitle.current.value = "";
    postContent.current.value = "";
    postTags.current.value = "";
    postViews.current.value = "";
  };

  return (
    <div classNameName="create-post">
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

      <button classNameName="btn btn-primary" onClick={AddNewPost}>
        Create Post
      </button>
    </div>
  );
};

export default CreatePost;
