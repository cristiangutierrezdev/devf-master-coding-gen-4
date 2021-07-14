
const { knex } = require('../knex');

const create = async (body) => {
  try {
    const result = await knex('animal').insert(body)
    return result
  } catch (error) {
    console.log(error)
  }
}

const findAll = async () => {
  try {
    let result = await knex('animal')
      .select('*')
    return result
  } catch (error) {
    console.log(error)
  }
}

const findOneById = (id) => {
  return true;
}

const updateOneById = (id, bodyUpdate) => {
  return true;
}

const deleteOneById = (id) => {
  return true;
}

module.exports = {
  create,
  findAll,
  findOneById,
  updateOneById,
  deleteOneById,
}