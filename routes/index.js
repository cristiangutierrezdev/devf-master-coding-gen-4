const express = require('express');
const router = express.Router();
const { User } = require('../models');

// Rutas
router.get('/', (_, response) => {
  response.status(200).send('Hello world');
});

router.post('/users', async (req, res) => {
  const newUser = new User(req.body);

  try {
    const user = await newUser.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(409).send(error);
  }
});

router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(404).send(error);
  }
});

router.get('/users/:userid', async (req, res) => {
  const id = req.params.userid;

  try {
    const user = await User.findById(id);
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send(error);
  }
});

router.put('/users/:userid', async (req, res) => {
  const id = req.params.userid;
  const newData = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(id, newData, {
      new: true,
    });

    res.status(200).send(updatedUser);
  } catch (error) {
    res.status(409).send(error);
  }
});

router.patch('/users/:userid', async (req, res) => {
  const id = req.params.userid;
  const newEmail = req.body.email;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: { email: newEmail } },
      {
        new: true,
      },
    );

    res.status(200).send(updatedUser);
  } catch (error) {
    res.status(409).send(error);
  }
});

// Esto es un delete fisico, debemos evitar hacer este tipo de deletes
// router.delete('/users/:userid', async (req, res) => {
//   try {
//     await User.findByIdAndDelete(req.params.userid);
//     res.status(200).send({ message: 'User was deleted' });
//   } catch (error) {
//     res.status(404).send(error);
//   }
// });

// Esto es un delete logico, es el mas recomendado
router.delete('/users/:userid', async (req, res) => {
  const id = req.params.userid;

  try {
    await User.findByIdAndUpdate(
      id,
      { $set: { is_active: false } },
      {
        new: true,
      },
    );

    res.status(200).send({ message: 'User was deleted' });
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
