const dbQueries = require('../dbQueries');
const server = require('../webServer');
const bodyParser = require('body-parser');
const postRequest = require('./post.js');
const putRequest = require('./put.js');

// Ideas from (Node.Js, Express.Js, and PostgreSQL, 2020)

function init() {
  const jsonParse = bodyParser.json();

  server.App.get('/getItems', dbQueries.getItems);
  server.App.get('/getItemById/:id', dbQueries.getItemById);
  server.App.get('/getItemPrice/:id', dbQueries.getItemPrice);
  server.App.post('/addUser', jsonParse, postRequest.addUser);
  server.App.post('/addOrder', jsonParse, postRequest.addOrder);
  server.App.put('/addOrderDetails', jsonParse, postRequest.addOrderDetails);
  server.App.put('/updateStock', jsonParse, putRequest.updateStock);
}

module.exports = {
  init,
};
