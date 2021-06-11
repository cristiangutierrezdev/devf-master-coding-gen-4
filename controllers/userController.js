const {
  save,
  findAll,
  findById,
  update,
  updateEmail,
  deleteUser,
  findAllPost
} = require('../services/userServices');

module.exports = {
  create: async (req, res) => {
    try {
      const newUser = await save(req.body);
      res.status(201).send(newUser);
    } catch (error) {
      res.status(409).send(error);
    }
  },
  getAll: async (_, res) => {
    try {
      const users = await findAll();
      res.status(200).send(users);
    } catch (error) {
      res.status(404).send(error);
    }
  },
  getAllPost: async (req, res) => {
    const id = req.params.userid;
    try {
      console.log(id)
      const users = await findAllPost(id);
      res.status(200).send(users);
    } catch (error) {
      res.status(404).send(error);
    }
  },
  getOne: async (req, res) => {
    const id = req.params.userid;

    try {
      const user = await findById(id);
      res.status(200).send(user);
    } catch (error) {
      res.status(404).send(error);
    }
  },
  update: async (req, res) => {
    const id = req.params.userid;
    const newData = req.body;

    try {
      const user = await findById(id);
      const updatedUser = await update(user, newData);

      res.status(200).send(updatedUser);
    } catch (error) {
      res.status(409).send(error);
    }
  },
  updateEmail: async (req, res) => {
    const id = req.params.userid;
    const newEmail = req.body.email;

    try {
      const user = await findById(id);
      const updatedUser = await updateEmail(user, newEmail);

      res.status(200).send(updatedUser);
    } catch (error) {
      res.status(409).send(error);
    }
  },
  delete: async (req, res) => {
    const id = req.params.userid;

    try {
      const user = await findById(id);
      await deleteUser(user);

      res.status(200).send({ message: 'User was deleted' });
    } catch (error) {
      res.status(404).send(error);
    }
  },
};
