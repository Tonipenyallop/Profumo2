require("dotenv").config();
const config = process.env.MODE || "development";
import knexfile from '../../knexfile'
const db = knexfile[config]

// const database = require("../../knexfile.js")[config];
// module.exports = require("knex")(database) ;
export default db
