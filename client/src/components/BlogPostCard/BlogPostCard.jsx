import "./BlogPostCard.css";
import { NavLink } from "react-router-dom";

const BlogPostCard = (props) => {
  const { title, imgURL, description, author, id } = props;
  return (
    <div className="blog-div">
      <img src={imgURL}></img>
      <NavLink id="title" to={`blogs/${id}`}>
        {title}
      </NavLink>
      <h2>{description}</h2>
      <h3>{author}</h3>
    </div>
  );
};

export default BlogPostCard;
