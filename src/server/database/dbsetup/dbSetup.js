
const pgtools = require('pgtools');
const config = {
  username: 'postgres',
  password: 'l3goT3st',
  port: 8080,
  host: 'localhost',
};

function init () {
  pgtools.createdb(config, 'legodatabase', function (err, res) {
    if (err) {
      console.error(err);
      process.exit(-1);
    }
    console.log(res);
  });
}
