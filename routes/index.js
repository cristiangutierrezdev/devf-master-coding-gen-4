const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rutas
router.get('/', (_, response) => {
  response.status(200).send('Hello world');
});

// USER ROUTES
router.post('/users', userController.create);
router.get('/users', userController.getAll);
router.get('/users/:userid', userController.getOne);
router.put('/users/:userid', userController.update);
router.patch('/users/:userid', userController.updateEmail);
// Esto es un delete logico, es el mas recomendado
router.delete('/users/:userid', userController.delete);

module.exports = router;
