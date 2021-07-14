const dotenv = require('dotenv');
dotenv.config();
const db = require('./knexfile');
const knex = require("knex");
const instanceKnex = knex(db[process.env.NODE_ENV]);

module.exports = instanceKnex;