
const knex = require('../knex');

const create = async (animalDetail) => {
  try {
    const result = await knex('animal')
      .insert(animalDetail);
    return result
  } catch (error) {
    console.log(error)
  }
}

const findAll = async () => {
  try {
    let result = await knex('animal')
      .select('*');
    return result
  } catch (error) {
    console.log(error)
  }
}

const findOneById = async (id) => {
  try {
    let result = await knex('animal')
      .where('id_animal', id);
    return result
  } catch (error) {
    console.log(error)
  }
}

const updateOneById = async (id, animalUpdate) => {
  try {
    let result = await knex('animal')
      .where('id_animal', id)
      .update(animalUpdate);
    return result
  } catch (error) {
    console.log(error)
  }
}

const deleteOneById = async (id) => {
  try {
    let result = await knex('animal')
      .where('id_animal', id)
      .del();
    return result
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  create,
  findAll,
  findOneById,
  updateOneById,
  deleteOneById,
}