
const dbSetup = require('./database/dbsetup/dbSetup.js');
const { Pool } = require('pg');

const pool = new Pool({
  username: dbSetup.username,
  password: dbSetup.password,
  host: dbSetup.host,
  database: 'lego-database',
  port: dbSetup.port,
});

async function init () {
  await pool.connect()
    .then(() => {
      console.log('Connected to the database');
    })
    .catch((err) => {
      console.log(err);
    });
}
