require("dotenv").config();
module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "profumo",
      user: process.env.DB_USER,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "pg",
    connection: {
      database: "profumo",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
