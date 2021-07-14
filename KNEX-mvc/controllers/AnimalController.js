const { Animal } = require('../models');

const create = async (req, res) => {
  const newAnimal = req.body;
  const response = await Animal.create(newAnimal);
  return res.status(201).json({ message: `${newAnimal.nombre} animal created`, response })
}

const findAll = async (_, res) => {
  const response = await Animal.findAll();
  return res.status(200).json({
    message: 'All animals',
    response,
  });

}

const findOneById = async (req, res) => {
  const { idAnimal } = req.params;
  const response = await Animal.findOne(idAnimal);
  return res.status(200).json({
    message: `Successfully obtained animal by id (${idAnimal})`,
    response,
  });
}

const updateOneById = async (req, res) => {
  const { idAnimal } = req.params;
  const response = await Animal.update(idAnimal, req.body);
  return res.status(200).json({
    message: `Successfully updated animal by id_animal (${idAnimal})`,
    response,
  });
}

const destroyOneById = async (req, res) => {
  const { idAnimal } = req.params;
  const response = await Animal.destroy(idAnimal);
  return res.status(200).json({
    message: `Successfully delete (hard) animal by id_animal (${idAnimal})`,
    response,
  });
}

const deleteOneById = async (req, res) => {
  const { idAnimal } = req.params;
  const response = await Animal.delit(idAnimal);
  return res.status(200).json({
    message: `Successfully delete (logic) animal by id_animal (${idAnimal})`,
    response,
  });
}

module.exports = {
  create,
  findAll,
  findOneById,
  updateOneById,
  deleteOneById,
  destroyOneById,
}