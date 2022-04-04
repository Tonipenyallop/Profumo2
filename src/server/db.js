require("dotenv").config();
const config = process.env.MODE || "development";
const db = require("../../knexfile.js")[config];
module.exports = require("knex")(db);
