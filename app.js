'use strict';
const express = require('./config/express.js');
const mongodb = require('./config/mongoose.js');
const db = mongodb();
const app = express();

module.exports = app;

// const express = require('express'),
//     io = require('socket.io'),
//     path = require('path'),
//     mongoose = require('./config/mongoose.js'),
//     db = mongoose(),
//     routerCm = require('./router/cm.js'),
//     app = express();
// app.use(express.static(path.resolve(__dirname, '../../my-js')));
// app.use(express.static(path.resolve(__dirname, '../public')));
// app.use('/cmapis',routerCm);
// const server = app.listen(80);
// const ws = io.listen(server);
// console.log('listen ' + __dirname + ':8888');
// // ws.on('connection', function(client) {
// //     client.on('join', function(msg) {
// //         //check overlap
// //         if (checkNickname(msg)) {
// //             client.emit('nickname', 'nickname is overlapped!');
// //         } else {
// //             client.nickname = msg;
// //             ws.sockets.emit('announcement', 'system', msg + ' joined');
// //             client.broadcast.emit('send.message', 'system', msg + ' joined!');
// //         }
// //     });
// //     //listen send
// //     client.on('send.message', function(msg) {
// //         client.broadcast.emit('send.message', client.nickname, msg);
// //     });
// //     //when disconnect info others
// //     client.on('disconnect', function() {
// //         if (client.nickname) {
// //             client.broadcast.emit('send.message', 'system', client.nickname + ' leaved!');
// //         }
// //     });
// // });
// // //check nickname overlap
// // var checkNickname = function(name) {
// //     var k, sk = ws.sockets.sockets;
// //     for (var k in sk) {
// //         if (sk.hasOwnProperty(k)) {
// //             if (sk[k] && sk[k].nickname == name) {
// //                 return true;
// //             }
// //         }
// //     }
// //     return false;
// // }
