require('dotenv').config();
// Update with your config settings.

module.exports = {
  client: "pg",
  connection: {
    host: process.env.APP_DB_HOST,
    database: process.env.APP_DB_NAME,
    user: process.env.APP_DB_USER,
    password: process.env.APP_DB_PASSWORD
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: "knex_migrations"
  }
};
