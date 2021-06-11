const { Post } = require('../models')

module.exports = {
  save: (body) => new Post(body).save(),
  findAll: () => Post.find({is_active: true}),
  findById: (id) => Post.findById(id),
  update: (post, newData) => {
    post = Object.assign(post, newData);
    return post.save();
  },
  deletePost: (post)=> {
    post.is_active = false
    return post.save()
  }
}