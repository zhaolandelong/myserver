var express = require('express'),
    io = require('socket.io'),
    path = require('path'),
    app = express();
// app.use(express.static(path.resolve(__dirname, '../static')));
app.use(express.static(__dirname+ '/static'));
var server = app.listen(8888),
    ws = io.listen(server);
/*app.get('/', function(req, res) {
    res.send('Hello World!');
    // res.sendFile('/home/zldl/myserver/static/index.html');
});*/
ws.on('connection', function(client) {
    client.on('join', function(msg) {
        //check overlap
        if (checkNickname(msg)) {
            client.emit('nickname', 'nickname is overlapped!');
        } else {
            client.nickname = msg;
            ws.sockets.emit('announcement', 'system', msg + ' joined');
            client.broadcast.emit('send.message', 'system', msg + ' joined!');
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