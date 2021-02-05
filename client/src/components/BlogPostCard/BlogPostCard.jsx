import "./BlogPostCard.css";
import { NavLink } from "react-router-dom";

const BlogPostCard = (props) => {
  const { title, imgURL, description, author, id } = props;
  return (
    <div className="blog-div">
      <NavLink to={`blogs/${id}`}>{title}</NavLink>
      <img src={imgURL}></img>
      <h2>{description}</h2>
      <h3>{author}</h3>
    </div>
  );
};

export default BlogPostCard;
