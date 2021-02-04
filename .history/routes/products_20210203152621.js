const Post = require('../models/post')
const db = require('../db/connection')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getPost = async (req, res) => {
  try {
      const { id } = req.params
      const post = await Post.findById(id)
      if (post) {
          return res.json(post)
      }
      res.status(404).json({ message: 'Product not found!' })
  } catch (error) {
      res.status(500).json({ error: error.message })
  }
}
