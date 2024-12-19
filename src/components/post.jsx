import { useContext } from "react";
import { ImCross } from "react-icons/im";
import { PostLists } from "../store/postlistProvider";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostLists);

  return (
    <div className="card post-card">
      <img src="" className="card-img-top" alt={post.userId} />

      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          <ImCross onClick={() => deletePost(post.id)} />
        </span>
        <p className="card-text">{post.body}</p>
        <p className="views">Views {post.views}</p>
        {post.tags.map((tag) => (
          <span className="badge text-bg-secondary tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Post;
