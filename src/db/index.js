const mongojs = require('mongojs');
require('dotenv').config();

const { DB_NAME } = process.env;
const db = mongojs(DB_NAME);

module.exports = db;
