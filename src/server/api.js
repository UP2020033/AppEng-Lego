const dbQueries = require('./dbQueries');
const server = require('./webServer');

function init() {
  server.App.get('/getItems', dbQueries.getItems);
  server.App.get('/getItemById/:id', dbQueries.getItemById);
}

module.exports = {
  init,
};
