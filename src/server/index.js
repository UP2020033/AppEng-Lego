const server = require('./webServer.js');
const api = require('./api');
const db = require('./connectDB');

const portListenOn = 8080;

server.init(portListenOn);

api.init();

db.init();
