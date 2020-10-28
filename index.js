const express = require('express');
const colors = require('colors');
const { request } = require('express');
const server = express();

server.use(express.json());


server.all('/user', (req, res, next) => {
    console.log('Por aqui paso');
    next();
});

server.get('/user', function(req, res) {
    res.json({
        username: 'Cameron',
        lastname: 'Castillo',
    })
    res.end();

});

server.delete('/user/:userId', function(req, res) {
    res.send(`User ${req.params.userId} deleted`);
    res.end;

});
server.put('/user/:id', function(req, res) {
    console.log(req.body)
    res.send(`User ${req.params.id} updated`);
    res.end;

});
server.post('/user/:id', function(req, res) {
    console.log(req.body);
    console.log(req.params);
    res.send('<h1>post request received</h1>');
    res.end;

});

server.listen(3000, function() {
    console.log('Server in port 3000'.red);

});