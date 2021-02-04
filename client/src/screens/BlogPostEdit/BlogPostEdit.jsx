import "./BlogPostEdit.css";
import React, { useState } from "react";

const BlogPostEdit = () => {
  const [post, setPost] = useState({
    title: "",
    imgURL: "",
    description: "",
    author: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const { title, imgURL, description, author } = post;

  return (
    <form action="">
      <input
        type="text"
        placeholder="Title"
        required
        onChange={handleChange}
        value={title}
        name="title"
      />
      <input
        type="text"
        placeholder="Image URL"
        required
        onChange={handleChange}
        value={imgURL}
        name="imgURL"
      />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Post here"
        required
        onChange={handleChange}
        value={description}
        name="description"
      ></textarea>
      <input
        type="text"
        placeholder="Author"
        required
        onChange={handleChange}
        value={author}
        name="author"
      />
    </form>
  );
};

export default BlogPostEdit;
