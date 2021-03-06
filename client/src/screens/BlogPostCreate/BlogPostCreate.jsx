import React, { useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { createPost } from "../../services/posts";
import { Redirect } from "react-router-dom";
import "./BlogPostCreate.css";

const BlogPostCreate = () => {
  const [post, setPost] = useState({
    title: "",
    imgURL: "",
    description: "",
    author: "",
  });

  const [isCreated, setIsCreated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const created = await createPost(post);
    setIsCreated({ created });
  };

  const { title, imgURL, description, author } = post;

  if (isCreated) {
    return <Redirect to={`/`} />;
  }

  return (
    <Layout>
      <form className="blog-form">
        <h1>Slap a Blog</h1>
        <input
          className="form-item"
          type="text"
          placeholder="Title"
          required
          onChange={handleChange}
          value={title}
          name="title"
          autoFocus
        />
        <input
          className="form-item"
          type="text"
          placeholder="Image URL"
          required
          onChange={handleChange}
          value={imgURL}
          name="imgURL"
        />
        <textarea
          className="form-item"
          cols="30"
          rows="20"
          placeholder="Post here"
          required
          onChange={handleChange}
          value={description}
          name="description"
        ></textarea>
        <input
          className="form-item"
          type="text"
          placeholder="Author"
          required
          onChange={handleChange}
          value={author}
          name="author"
        />
        <button className="form-item button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default BlogPostCreate;
