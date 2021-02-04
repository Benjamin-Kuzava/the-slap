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

const getProduct = async (req, res) => {
  try {
      const { id } = req.params
      const product = await Product.findById(id)
      if (product) {
          return res.json(product)
      }
      res.status(404).json({ message: 'Product not found!' })
  } catch (error) {
      res.status(500).json({ error: error.message })
  }
}
