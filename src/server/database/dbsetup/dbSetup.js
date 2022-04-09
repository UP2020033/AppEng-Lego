const dbConnect = require('../../connectDB.js');
const pgtools = require('pgtools');
const config = require('../config');
const fs = require('fs');

// Insertdb function takes the content of insert.sql and insert it into the database.

async function insertdb() {
  const insert = fs.readFileSync('./insertdb.sql', 'utf8');
  await dbConnect.client.query(insert)
  // Inserting the output of insertdb.sql into the database.
    .then(() => {
      console.log('Inserts complete');
      process.exit(0);
    })
    .catch(err => {
      console.log(err);
    });
}

// The init function is invoked by index.js, it creates the database and imports functions from connectDB.js.

async function init() {
  await pgtools.createdb(config, 'legodatabase', function (err, res) {
    // Creating the database by using the pgtools createdb tool and passing config and the name of the db into it.
    if (err) {
      console.error(`createdb: ${err}`);
    } else {
      console.log(res);
      dbConnect.init();
    }
  });

  // Below is essentially a mimic the insertdb function, but instead it utilises the createdb file add the tables.

  const create = fs.readFileSync('./createdb.sql', 'utf8');
  await dbConnect.client.query(create)
    .then(async () => {
      console.log('Tables created');
      await insertdb();
      // Awaiting insertdb to ensure that the inserts occur after the tables have been created.
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports = {
  init,
};

// reference: https://www.npmjs.com/package/pgtools
// https://node-postgres.com/features/queries
