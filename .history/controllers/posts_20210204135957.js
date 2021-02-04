const Post = require("../models/post");
const db = require("../db/connection");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const getPosts = async (req, res) => {
  try {
    const Posts = await Post.find();
    res.json(Posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPost = async (req, res) => {
  try {
    const { _id } = req.params;
    const post = await Post.findById(_id);
    if (Post) {
      return res.json(post);
    }
    res.status(404).json({ message: "post not found." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createPost = async (req, res) => {
  try {
    const post = await new Post(req.body);
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  await Post.findByIdAndUpdate(id, req.body, { new: true }, (error, Post) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    if (!Post) {
      return res.status(404).json({ message: "post not found!" });
    }
    res.status(200).json(Post);
  });
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Post.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("post deleted");
    }
    throw new Error("post not found");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
};
