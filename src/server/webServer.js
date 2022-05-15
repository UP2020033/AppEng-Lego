// Importing express module
const express = require('express');

const authConfig = require('./auth-config.js');

// Creating the express.js server
const app = express();


// (Example of Authentication with Auth0, 2021/2021)
// Serving the auth config

function init(portListenOn, error) {
  app.get('/auth-config', (req, res) => {
    res.json(authConfig);
  });


  // this will serve the files present in static/ inside this stage
  app.use(express.static('../client/'));


  // Listen on port
  app.listen(portListenOn);
  if (!error) {
    console.log('Server accessible on port:' + ' ' + portListenOn);
  }
}

// (Simple Apps Need APIs, 2020/2022)

module.exports = {
  init,
  App: app,
};
