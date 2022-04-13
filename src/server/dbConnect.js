
const config = require('./database/config');
const { Client } = require('pg');

// Creating a new client, assigning it to a variable and taking the config from config.js

const client = new Client({
  user: config.user,
  host: config.host,
  database: 'legodatabase',
  password: config.password,
  port: config.port,
});

// The init function connects the user to the database

async function init() {
  await client.connect()
  // Connecting the user to the database using the connect() method.
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

// reference: https://node-postgres.com/features/connecting
