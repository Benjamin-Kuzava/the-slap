import React, { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import "./BlogPostDetail.css";
import { getPost, deletePost } from "../../services/posts";
import { useParams } from "react-router-dom";

const BlogPostDetail = (props) => {
  const [post, setPost] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id);
      setPost(post);
      setIsLoaded(true);
    };

    fetchPost();
  }, [id]);

  if (!isLoaded) {
    return <div>Loading ...</div>;
  }

  return (
    <Layout>
      <div className="blog-detail">
        <h1>{post.title}</h1>
        <img src={post.imgURL}></img>
        <h2>{post.description}</h2>
        <h3>{post.author}</h3>
        <div className="buttons">
          <button>Edit</button>
          <button onClick={() => deletePost(post._id)}>Delete</button>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPostDetail;
