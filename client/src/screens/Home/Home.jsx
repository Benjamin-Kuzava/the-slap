import React from "react";
import "./Home.css";
import BlogPostCards from "../../components/BlogPostCards/BlogPostCards";
import Layout from "../../components/shared/Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div>
        <BlogPostCards />
      </div>
    </Layout>
  );
};

export default Home;
