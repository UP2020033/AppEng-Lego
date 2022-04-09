const dbQueries = require('./dbQueries');
const server = require('./webServer');

function init() {
  server.App.get('/getItems', dbQueries.getItems);
}

module.exports = {
  init,
};
