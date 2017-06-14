'use strict'
import express = require('express');
import http = require('http');
import url = require('url');
// import WebSocket = require('ws');
let app = express();
let server = http.createServer(app);
import socketio = require('socket.io');
let io = socketio(server);
let port = 8080;

app.set('views', './views');
app.set('view engine', 'ejs');

console.log('Server started at ' + new Date().toTimeString());
io.on('connection', function(socket){
    console.log('New connection with id: ' + socket.id );
    socket.emit('news', {hello: 'world'});
    socket.on('My other event', function(data){
        console.log(data);
    });
});

import index = require('./routes/index');
app.use('/', index);
server.listen(port, function listening(){
    console.log('Listening on: ' + server.address().port);
});
