var app = require('express')();
var http = require('http').createServer(app);

app.get('/', (req, res) => {
    res.send('<h1>Ahlan wa sahlan</h1>');
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});
