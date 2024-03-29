import type { Knex } from "knex";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  // development: {
  //   client: "postgresql",
  //   connection: {
  //     filename: "./dev.sqlite3",
  //   },
  // },

  development: {
    client: "postgresql",
    connection: {
      database: "profumo",
      user: process.env.DB_USER,
      password: "",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.PASSWORD,
      port: 5432,
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

module.exports = config;
