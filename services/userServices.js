const { User } = require('../models');

module.exports = {
  save: (body) => new User(body).save(),
  findAll: () => User.find({is_active: true}),
  findAllPost: (id) => User.findById(id).populate('posts'),
  findById: (id) => User.findById(id),
  update: (user, newData) => {
    user = Object.assign(user, newData);
    return user.save();
  },
  updateEmail: (user, newEmail) => {
    user.email = newEmail;
    return user.save();
  },
  deleteUser: (user)=> {
    user.is_active = false
    return user.save()
  },
  addPost: (user, postId)=>{
    user.posts.push(postId);
    return user.save()
  }
};
