// Importing express module
const express = require('express');

const path = require('path');
const url = require('url');
const config = require('./auth0-config.mjs');


// Creating the express.js server
const app = express();

// Enable serving for static pages
app.use(express.static('../client'));

// Variable to store the port value
const portListenOn = 8080;

// Listen on port
function serverStart(portListenOn, error) {
  app.listen(portListenOn);
  if (!error) {
    console.log('Server accessible on port:' + ' ' + portListenOn);
  }
}

// Starting server
serverStart(portListenOn);

// Boakes, R. (2021). portsoc/staged-simple-message-board. GitHub. Retrieved 8 April 2021, from https://github.com/portsoc/staged-simple-message-board.
