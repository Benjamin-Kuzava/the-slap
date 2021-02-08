import React, { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { getPost, updatePost } from "../../services/posts";
import { useParams, Redirect } from "react-router-dom";
import "./BlogPostEdit.css";

const BlogPostEdit = (props) => {
  const [post, setPost] = useState({
    title: "",
    imgURL: "",
    description: "",
    author: "",
  });

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id);
      setPost(post);
    };
    fetchPost();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { id } = props.match.params;
    const updated = await updatePost(id, post);
    setUpdated(updated);
  };

  const { title, imgURL, description, author } = post;

  if (isUpdated) {
    return <Redirect to={`/blogs/${props.match.params.id}`} />;
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
          Update
        </button>
      </form>
    </Layout>
  );
};

export default BlogPostEdit;
