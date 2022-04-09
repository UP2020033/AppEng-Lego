
const config = require('./database/config');
const { Client } = require('pg');

const client = new Client({
  user: config.user,
  host: config.host,
  database: 'legodatabase',
  password: config.password,
  port: config.port,
});

async function init() {
  await client.connect()
    .then(() => {
      console.log('Connected to the database');
    })
    .catch((err) => {
      console.log(`Connect: ${err}`);
    });
}

module.exports = {
  init,
  client,
};
