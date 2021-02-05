import "./BlogPostCard.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Layout from "../../components/shared/Layout/Layout";

const BlogPostCard = (props) => {
  const [post, setPost] = useState({
    title: "",
    imgURL: "",
    description: "",
    author: "",
  });

  const { title, imgURL, description, author } = post;
  return (
    <Layout>
      <div className="blog-div">
        <h1>Slap a Blog</h1>
        <img src="https://images.unsplash.com/photo-1563826773-1e2b4b2cde42?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Ym13fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
        <input
          className="div-item"
          type="text"
          placeholder="Title"
          value={title}
          name="title"
        />
      </div>
      <div className="blog-div1">
        <h1>Slap a Blog</h1>
        <img src="https://images.unsplash.com/photo-1563826773-1e2b4b2cde42?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Ym13fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
        <input
          className="div-item"
          type="text"
          placeholder="Title"
          value={title}
          name="title"
        />
      </div>
      <div className="blog-div2">
        <h1>Slap a Blog</h1>
        <img src="https://images.unsplash.com/photo-1563826773-1e2b4b2cde42?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Ym13fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
        <input
          className="div-item"
          type="text"
          placeholder="Title"
          value={title}
          name="title"
        />
      </div>
    </Layout>
  );
};

export default BlogPostCard;
