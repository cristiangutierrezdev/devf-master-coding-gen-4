const { save, findAll, findById, update, deletePost } = require('../services/postServices')
const userServices = require('../services/userServices')

module.exports = {
  create: async (req, res) => {
    const { userid } = req.params;
    try {
      const createdPost = await save(req.body);
      const user = await userServices.findById(userid);
      const updatedUser = await userServices.addPost(user, createdPost._id)

      res.status(201).send(updatedUser);
    } catch (error) {
      res.status(409).send(error);
    }
  },
  getAll: async (_, res) => {
    try {
      const posts = await findAll();
      res.status(200).send(posts);
    } catch (error) {
      res.status(404).send(error);
    }
  },
  getOne: async (req, res) => {
    try {
      const post = await findById(req.params.postid);
      res.status(200).send(post);
    } catch (error) {
      res.status(404).send(error);
    }
  },
  update: async (req, res) => {
    try {
      const post = await findById(req.params.postid);
      const updatedPost = await update(post, req.body);
      res.status(201).send(updatedPost);
    } catch (error) {
      res.status(409).send(error);
    }
  },
  delete: async (req, res) => {
    try {
      const post = await findById(req.params.postid);
      await deletePost(post);
      res.status(201).send({ message: 'Post was deleted' });
    } catch (error) {
      res.status(409).send(error);
    }
  },
};
