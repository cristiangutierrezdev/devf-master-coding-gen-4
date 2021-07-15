module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.HOST_PG_DEV,
      port: process.env.PORT_DEV,
      database: process.env.DATABASE_PG_DEV,
      user: process.env.USER_PG_DEV,
      password: process.env.PASSWORD_PG_DEV,
    },
  },
  staging: {
    client: 'pg',
    connection: {
      host: process.env.HOST_PG_STA,
      database: process.env.DATABASE_PG_STA,
      user: process.env.USER_PG_STA,
      password: process.env.PASSWORD_PG_STA,
    },
  },
  production: {
    client: 'pg',
    connection: {
      host: process.env.HOST_PG_PRO,
      database: process.env.DATABASE_PG_PRO,
      user: process.env.USER_PG_PRO,
      password: process.env.PASSWORD_PG_PRO,
    },
  }
};
