import "./BlogPostCards.css";
import React, { useState, useEffect } from "react";
import { getPosts } from "../../services/posts";
import BlogPostCard from "../BlogPostCard/BlogPostCard";

const BlogPostCards = () => {
  const [allPosts, setAllPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setAllPosts(posts);
    };
    fetchPosts();
  }, []);
  return (
    <div className="postcard">
      {allPosts.map((post) => (
        <BlogPostCard
          key={post._id}
          id={post._id}
          title={post.title}
          description={post.description}
          imgURL={post.imgURL}
          author={post.author}
        />
      ))}
    </div>
  );
};

export default BlogPostCards;
