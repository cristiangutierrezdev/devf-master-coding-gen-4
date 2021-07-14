const { Animal } = require('../models');

const create = async (req, res) => {
  const newAnimal = req.body;
	const response = await Animal.create(newAnimal);
  return res.status(201).json({ message: `${newAnimal.nombre} animal created`, response })
}

const findAll = async (_, res) => {
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

const findOneById = async (req, res) => {
  const { idAnimal } = req.params;
  const response = await Animal.findOneById(idAnimal);
  return res.status(200).json({
    message: `Successfully obtained animal by id (${idAnimal})`,
    response,
  });
}

const updateOneById = async (req, res) => {
  const { idAnimal } = req.params;
  const response = await Animal.updateOneById(idAnimal, req.body);
  return res.status(200).json({
    message: `Successfully updated animal by id_animal (${idAnimal})`,
    response,
  });
}

const deleteOneById = async (req, res) => {
  const { idAnimal } = req.params;
  const response = await Animal.deleteOneById(idAnimal);
  return res.status(204).json({ message: 'animal deleted', response });
}

module.exports = {
  create,
  findAll,
  findOneById,
  updateOneById,
  deleteOneById,
}