const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const postController = require('../controllers/postController')

// Rutas
router.get('/', (_, response) => {
  response.status(200).send('Hello world');
});

// USER ROUTES
router.post('/users', userController.create);
router.get('/users', userController.getAll);
router.get('/users/posts/:userid', userController.getAllPost);
router.get('/users/:userid', userController.getOne);
router.put('/users/:userid', userController.update);
router.patch('/users/:userid', userController.updateEmail);
// Esto es un delete logico, es el mas recomendado
router.delete('/users/:userid', userController.delete);

// POST ROUTES
router.post('/posts/:userid', postController.create)
router.get('/posts', postController.getAll)
router.get('/posts/:postid', postController.getOne)
router.put('/posts/:postid', postController.update)
router.delete('/posts/:postid', postController.delete)

module.exports = router;
