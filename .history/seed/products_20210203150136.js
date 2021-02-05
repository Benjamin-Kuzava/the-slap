const db = require('../db/connection')
const Post = require('../models/post')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const posts =
    [
      {
        title: "",
        
        imgURL: "",
        author: ""
      }
    ]
}