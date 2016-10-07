var express = require('express'),
    io = require('socket.io'),
    app = express();
app.use(express.static(__dirname));
var server = app.listen(8888),
    ws = io.listen(server);
app.get('/', function(req, res) {
    res.send('Hello World!');
});
ws.on('connection', function(client) {
    client.broadcast.emit('send.message', 'system', client.nickname + ' connect!');
    client.on('join', function(msg) {
        //check overlap
        if (checkNickname(msg)) {
            client.emit('nickname', 'nickname is overlapped!');
        } else {
            client.nickname = msg;
            ws.sockets.emit('announcement', 'system', msg + ' joined');
        }
    });
    //listen send
    client.on('send.message', function(msg) {
        client.broadcast.emit('send.message', client.nickname, msg);
    });
    //when disconnect info others
    client.on('disconnect', function() {
        if (client.nickname) {
            client.broadcast.emit('send.message', 'system', client.nickname + ' leaved!');
        }
    });
});
//check nickname overlap
var checkNickname = function(name) {
    var k, sk = ws.sockets.sockets;
    for (var k in sk) {
        if (sk.hasOwnProperty(k)) {
            if (sk[k] && sk[k].nickname == name) {
                return true;
            }
        }
    }
    return false;
}
