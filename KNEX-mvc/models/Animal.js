
const { knex } = require('../knex');

const create = (body) => {
  // Acá agregaremos la consulta a la base de datos con knex
  return knex // retornamos una promesa. 'then' y/o 'catch' será manejados desde el controller.
    .insert(body)
    .returning(['id_animal', 'nombre'])
    .into('animal')
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
  // Acá agregaremos la consulta a la base de datos con knex
  return true;
}

const updateOneById = (id, bodyUpdate) => {
  // Acá agregaremos la consulta a la base de datos con knex
  return true;
}

const deleteOneById = (id) => {
  // Acá agregaremos la consulta a la base de datos con knex
  return true;
}

module.exports = {
  create,
  findAll,
  findOneById,
  updateOneById,
  deleteOneById,
}