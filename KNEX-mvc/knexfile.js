const dotenv = require('dotenv');
dotenv.config();
const knex = require("knex");

const db = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.HOST_PG,
      database: process.env.DATABASE_PG,
      user: process.env.USER_PG,
      password: process.env.PASSWORD_PG,
    },
  },
  staging: {
    client: 'pg',
    connection: {
      host: process.env.HOST_PG,
      database: process.env.DATABASE_PG,
      user: process.env.USER_PG,
      password: process.env.PASSWORD_PG,
    },
  },
  production: {
    client: 'pg',
    connection: {
      host: process.env.HOST_PG,
      database: process.env.DATABASE_PG,
      user: process.env.USER_PG,
      password: process.env.PASSWORD_PG,
    },
  }

};

const knexInstance = knex(db[process.env.NODE_ENV])

module.exports = knexInstance;
