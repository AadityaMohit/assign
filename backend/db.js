const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ecommerce',
  password: 'aaditya0308',
  port: 5432,
});
module.exports = pool;
