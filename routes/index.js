const express = require('express');
const router = express.Router();
const { User } = require('../models');

// Rutas
router.get('/', (request, response) => {
  response.status(200).send('Hello world');
});

router.post('/register', async (req, res) => {
  const newUser = new User(req.body);

  try {
    const user = await newUser.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(409).send(error);
  }
});

router.post('/register', async (req, res) => {
  const newUser = new User(req.body);

  // newUser
  //   .save()
  //   .then((user) => {
  //     res.status(201).send(user);
  //   })
  //   .catch((error) => {
  //     res.status(409).send(error);
  //   });

  try {
    const user = await newUser.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(409).send(error);
  }
});

router.get('/users/:userid', (req, res) => {
  res.status(200).send(req.params.userid);
});

router.get('/users', (req, res) => {
  res.status(200).send(req.query);
});

module.exports = router;
