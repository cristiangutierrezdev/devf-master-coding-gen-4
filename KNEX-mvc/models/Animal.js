
const knex = require('../knexfile');

const createModelKnex = require('../utils/createModelKnex');

const TABLE = 'animal';
const RETURNING_DATA = '*';
const TABLE_ID = 'id_animal';

const Animal = createModelKnex(knex, TABLE, RETURNING_DATA, TABLE_ID);

module.exports = Animal;