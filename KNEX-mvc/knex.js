const knex = require('knex')({
  client: 'pg',
  connection: {
    host : process.env.HOST_PG,
    user : process.env.USER_PG,
    password : process.env.PASSWORD_PG,
    database : process.env.DATABASE_PG,
  }
});

module.exports = knex; // Cómo solamente estamos exportando una variable no son necesarias las {}