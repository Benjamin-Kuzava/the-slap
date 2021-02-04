import React from "react";
import "./Home.css";
import Layout from "../../components/shared/Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div>
        <PostCard></PostCard>
      </div>
    </Layout>
  );
};

export default Home;
