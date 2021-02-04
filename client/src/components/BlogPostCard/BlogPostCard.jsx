import React from "react";
import "./BlogPostCard.css";

const BlogPostCard = (props) => {
  return (
    <div>
      <Link className="card" to={`/postcard/${props._id}`}>
        <img
          className="product-card-image"
          src={props.imgURL}
          alt={props.name}
        />
        <div>View</div>
      </Link>
    </div>
  );
};

export default BlogPostCard;
