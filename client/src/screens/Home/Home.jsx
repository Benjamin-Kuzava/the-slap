import React from "react";
import "./Home.css";
import BlogPostCard from "../../components/BlogPostCard/BlogPostCard";
import Layout from "../../components/shared/Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div>
        <BlogPostCard />
      </div>
    </Layout>
  );
};

export default Home;
