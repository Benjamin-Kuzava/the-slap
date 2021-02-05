import "./BlogPostCards.css";
import React, { useState } from "react";

const BlogPostCards = () => {
  const [Post, setPost] = useState({
    title: "asdf",
    imgURL:
      "https://images.unsplash.com/photo-1563826773-1e2b4b2cde42?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Ym13fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "5",
  });
  return (
    <div>
      {/* <Link className="card" to={`/blogpost/${props._id}`}>
        <img className="blog-card-image" src={props.imgURL} alt={props.name} />
      </Link> */}
      <h1>Postcards</h1>
    </div>
  );
};

export default BlogPostCards;
