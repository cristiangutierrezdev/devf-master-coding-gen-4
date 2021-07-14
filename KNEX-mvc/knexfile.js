module.exports = {
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
