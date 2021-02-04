const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema
const Post = new Schema(
  {
    title: { type: String, required: true },
    imgURL: { type: String, required: true },
    description: { type: String, required: true },
<<<<<<< HEAD
    author: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('posts', Post)
=======
    author: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("posts", Post);
>>>>>>> 052e65bde9120994d9bd60864346d0347f8aaaea
