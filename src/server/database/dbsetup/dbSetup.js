const dbConnect = require('../../connectDB.js');
const pgtools = require('pgtools');
const config = require('../config');
const fs = require('fs');

function insertdb() {
  const insert = fs.readFileSync('./insertdb.sql', 'utf8');
  dbConnect.pool.query(insert, (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Inserts complete');
  });
}

function init() {
  pgtools.createdb(config, 'legodatabase', function (err, res) {
    if (err) {
      console.error(err);
    }
    console.log(res);
  });
  dbConnect.init();

  const create = fs.readFileSync('./createdb.sql', 'utf8');
  dbConnect.pool.query(create, (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Tables created');
    insertdb();
  });
}

module.exports = {
  init,
};
