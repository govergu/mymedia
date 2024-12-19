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
  };

  return (
    <div className="create-post">
      <div className="mb-3">
        <label htmlFor="userid" className="form-label">
          UserName
        </label>
        <input type="number" className="form-control" ref={postUser} />
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

      <button className="btn btn-primary" onClick={AddNewPost}>
        Create Post
      </button>
    </div>
  );
};

export default CreatePost;
