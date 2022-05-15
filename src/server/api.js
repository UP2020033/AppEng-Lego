const dbQueries = require('./dbQueries');
const server = require('./webServer');

// Ideas from (Node.Js, Express.Js, and PostgreSQL, 2020)

function init() {
  server.App.get('/getItems', dbQueries.getItems);
  server.App.get('/getItemById/:id', dbQueries.getItemById);
  server.App.get('/getItemPrice/:id', dbQueries.getItemPrice);
}

module.exports = {
  init,
};
