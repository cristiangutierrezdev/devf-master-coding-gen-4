const { Animal } = require('../models');

const create = (req, res) => {
  const newRental = req.body;
	const response = Animal.create(newRental);
  return res.status(201).json({ message: 'animal created', response })
}

const findAll = async (req, res) => {
  const response = await Animal.findAll();
  try {
    return res.status(200).json({
      message: 'All animals',
      response,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error obtaining list of animal',
      error,
    });
  }
}

const findOneById = (req, res) => {
  const { idAnimal } = req.params;
  const response = Animal.findOneById(idAnimal);
  return res.status(200).json({
    message: 'Successfully obtained animal by id',
    response,
  });
}

const updateOneById = (req, res) => {
  const { idAnimal } = req.params;
  const response = Animal.updateOneById(idAnimal, req.body);
  return res.status(200).json({
    message: 'Successfully updated animal by id',
    response,
  });
}

const deleteOneById = (req, res) => {
  const { idAnimal } = req.params;
  const response = Animal.deleteOneById(idAnimal);
  return res.status(204).json({ message: 'animal deleted', response });
}

module.exports = {
  create,
  findAll,
  findOneById,
  updateOneById,
  deleteOneById,
}