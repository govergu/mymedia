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
<<<<<<< HEAD
    const PostUser = postUser.current.value;
    const PostTitle = postTitle.current.value;
    const PostContent = postContent.current.value;
    const PostTags = postTags.current.value.split(" ");
    const PostViews = postViews.current.value;
=======
>>>>>>> 22bb3d41e230547d994785beb5754acab5d89151
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
<<<<<<< HEAD
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

=======
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
>>>>>>> 22bb3d41e230547d994785beb5754acab5d89151
    postUser.current.value = "";
    postTitle.current.value = "";
    postContent.current.value = "";
    postTags.current.value = "";
    postViews.current.value = "";
  };

  return (
<<<<<<< HEAD
    <div classNameName="create-post">
=======
    <form classNameName="create-post">
>>>>>>> 22bb3d41e230547d994785beb5754acab5d89151
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

<<<<<<< HEAD
      <button classNameName="btn btn-primary" onClick={AddNewPost}>
=======
      <button
        type="submit"
        classNameName="btn btn-primary"
        onClick={AddNewPost}
      >
>>>>>>> 22bb3d41e230547d994785beb5754acab5d89151
        Create Post
      </button>
    </div>
  );
};

export default CreatePost;
