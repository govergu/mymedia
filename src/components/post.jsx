import { useContext } from "react";
import { ImCross } from "react-icons/im";
import { PostLists } from "../store/postlistProvider";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostLists);

  return (
    <div classNameName="card post-card">
      <img src="" classNameName="card-img-top" alt={post.userId} />

      <div classNameName="card-body">
        <h5 classNameName="card-title">{post.title}</h5>
        <span classNameName="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          <ImCross onClick={() => deletePost(post.id)} />
        </span>
        <p classNameName="card-text">{post.body}</p>
        <p classNameName="views">Views {post.views}</p>
        {post.tags.map((tag) => (
          <span classNameName="badge text-bg-secondary tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Post;
