
const config = require('./database/config');
const { Pool } = require('pg');

const pool = new Pool({
  user: config.user,
  password: config.password,
  host: config.password,
  database: 'lego-database',
  port: config.port,
});

async function init() {
  await pool.connect()
    .then(() => {
      console.log('Connected to the database');
    })
    .catch((err) => {
      console.log(`Error is ${err}`);
    });
}

module.exports = {
  init,
  pool,
};
