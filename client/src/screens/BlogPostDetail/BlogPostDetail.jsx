import React, { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import "./BlogPostDetail.css";
import { getPost, deletePost } from "../../services/posts";
import { useParams, Redirect, Link } from "react-router-dom";

const BlogPostDetail = (props) => {
  const [post, setPost] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id);
      setPost(post);
      setIsLoaded(true);
    };
    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    await deletePost(post._id);
    setIsUpdated(!isUpdated);
  };

  if (!isLoaded) {
    return <div>Loading ...</div>;
  }

  if (isUpdated) {
    return <Redirect to="/" />;
  }

  return (
    <Layout>
      <div className="blog-detail">
        <h1>{post.title}</h1>
        <img src={post.imgURL} alt={post.title} id="detail-img"></img>
        <div className="detail-info">
          <p>{post.description}</p>
          <h3>{post.author}</h3>
          <div className="detail-buttons">
            <button className="detail-button edit">
              <Link to={`/blogs/${id}/edit`}>Edit</Link>
            </button>
            <button
              className="detail-button delete"
              onClick={() => handleDelete()}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPostDetail;
