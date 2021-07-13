const express = require('express');
const router = express.Router();

const { AnimalController } = require('../controllers');

// Create
router.post('/animals', AnimalController.create);

// Read All
router.get('/animals', AnimalController.findAll);

// Read One
router.get('/animals/:idAnimal', AnimalController.findOneById);

// Update One
router.patch('/animals/:idAnimal', AnimalController.updateOneById);

// Delete One (borrado lógico)
router.delete('/animals/:idAnimal', AnimalController.deleteOneById);

// Destroy One (borrado físico)
// router.delete('/animals/:idRental/destroy', AnimalController.destroyOneById);

module.exports = router;