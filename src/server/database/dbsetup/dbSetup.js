const dbConnect = require('../../connectDB.js');
const pgtools = require('pgtools');
const config = require('../config');
const fs = require('fs');

async function insertdb() {
  const insert = fs.readFileSync('./insertdb.sql', 'utf8');
  await dbConnect.client.query(insert)
    .then(() => {
      console.log('Inserts complete');
      process.exit(0);
    })
    .catch(err => {
      console.log(err);
    });
}

async function init() {
  await pgtools.createdb(config, 'legodatabase', function (err, res) {
    if (err) {
      console.error(`createdb: ${err}`);
    } else {
      console.log(res);
      dbConnect.init();
    }
  });

  const create = fs.readFileSync('./createdb.sql', 'utf8');
  await dbConnect.client.query(create)
    .then(async () => {
      console.log('Tables created');
      await insertdb();
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports = {
  init,
};
