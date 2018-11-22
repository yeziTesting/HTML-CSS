let port = 8080;
let io = require('socket.io').listen(port);
io.sockets.on('connection', function(socket) {
    socket.on('message', function(message) {
        socket.broadcast.emit('message', message);
    });

    socket.on('disconnect', function() {
        socket.broadcast.emit('user disconnected');
    })
});