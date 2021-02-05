const db = require('../db/connection')
const Post = require('../models/post')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const posts =
    [
      {
        "title": "Fast&Furious ",
        "imgURL": "https://images.unsplash.com/photo-1592930845156-49a0941384c8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8&auto=format&fit=crop&w=400&q=60",
        "description": "",
        "author": ""
      }
    ]
}