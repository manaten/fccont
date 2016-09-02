'use strict';

const server = require('http').createServer();
const url = require('url');

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use('/', express.static('build/client'));

server.on('request', app);
server.listen(port, function () { console.log('Listening on ' + server.address().port) });

// for testing
// const WebSocketServer = require('ws').Server
//   , wss = new WebSocketServer({ port: 9998 });

// wss.on('connection', function connection(ws) {
//   ws.on('message', function incoming(message) {
//     console.log('received: %s', message);
//   });
// });
