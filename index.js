var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
    // res.send('<h1>Ahlan wa sahlan</h1>');
    res.sendFile(__dirname + '/page/index.html');
});

io.on('connection', socket => {
    // socket.on('chat message', (msg) => {
    //     console.log('message: ' + msg);
    // });

    // socket.broadcast.emit('hi');
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});
