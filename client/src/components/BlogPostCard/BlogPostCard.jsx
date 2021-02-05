import "./BlogPostCard.css";

const BlogPostCard = (props) => {
  const { title, imgURL, description, author } = props;
  return (
    <div className="blog-div">
      <h1>{title}</h1>
      <img src={imgURL}></img>
      <h2>{description}</h2>
      <h3>{author}</h3>
    </div>
  );
};

export default BlogPostCard;
