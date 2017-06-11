const express = require('express');
const http = require('http');
const url = require('url');
const WebSocket = require('ws');
const port = 8080;

const app = express();
app.set('views', './views');
app.set('view engine', 'ejs');

const server = http.createServer(app);
const wss = new WebSocket.Server({server});
console.log('Server started at ' + new Date().toTimeString());

wss.on('connection', function connecttion(ws, req){
    console.log('new connection id: ' + ws._ultron.id);
    // console.log(ws);
    ws.on('message', function incoming(message){
        console.log('Incomming message: ' + message);
    });

    ws.send('Connection establised!', function err(error){
        if(error){
            console.log('Error sending message. ' + error);
        }
    });

    ws.on('close', function(code, reason){
        console.log('Connection to socket ' + this + ' has ben lost. Reason: ' + reason);
        console.log(this)
    });
});

app.use('/', require('./routes/index.js'));
server.listen(port, function listening(){
    console.log('Listening on: ' + server.address().port);
});
