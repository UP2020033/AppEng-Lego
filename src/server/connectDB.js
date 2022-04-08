
const config = require('./database/config');
const { Pool } = require('pg');

const pool = new Pool({
  user: config.user,
  host: config.host,
  database: 'lego-database',
  password: config.password,
  port: config.port,
});

async function init() {
  await pool.connect()
    .then(() => {
      console.log('Connected to the database');
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = {
  init,
  pool,
};
