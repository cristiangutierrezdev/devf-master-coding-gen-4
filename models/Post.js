const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  description: String,
  location: String,
  image: {
    type: String,
    required: true
  },
  is_active: {
    type: Boolean,
    default: true
  }
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post
