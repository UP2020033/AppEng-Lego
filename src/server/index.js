const server = require('./webServer.js');
const api = require('./api');
const db = require('./dbConnect');

const portListenOn = 8080;

server.init(portListenOn);

api.init();

db.init();
