'use strict';
const mongoose = require('mongoose');
const Test = mongoose.model('Test');
const fs = require('fs');
const path = require('path');
const inspect = require('util').inspect;
// const multiparty = require('multiparty');
module.exports = {
    removeAll(req, res, next) {
        Test.remove({}, err => {
            if (err) {
                return next(err);
            } else {
                res.end('Ques all removed!')
            }
        });
    },
    addData(req, res, next) {
        const count = req.query.count || 10;
        for (let i = 0; i < count; i++) {
            new Test({
                time: Date.now(),
                rand: Math.random()
            }).save(err => {
                if (err) {
                    return next(err);
                }
            });
        }
        res.end('add ' + count + ' data');
    },
    getData(req, res, next) {
        Test.find({}, '-_id -__v')
            .exec((err, docs) => {
                if (err) {
                    res.end(err);
                } else {
                    res.json({
                        data: docs
                    });
                }
            });
    },
    postForm(req, res, next) {
        // const query = req.body;
        // console.log(query);
        // if (req.busboy) {
        //     req.busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
        //         // var saveTo = path.join(__dirname.replace('routes', 'static'), yourFileName);
        //         console.log(arguments);
        //         const saveTo = path.join(__dirname, '../../public/testfiles/', filename);;
        //         file.pipe(fs.createWriteStream(saveTo));
        //         file.on('end', function() {
        //             //在这边可以做一些数据库操作
        //             res.json({
        //                 headers: req.headers,
        //                 data: req.body
        //             });
        //         });
        //     });
        //     req.pipe(req.busboy);
        // }
        let resData = {};
        const busboy = req.busboy;
        busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
            // console.log('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);
            resData[fieldname] = 'File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype;
            file.on('data', function(data) {
                // console.log('File [' + fieldname + '] got ' + data.length + ' bytes');
                resData[fieldname] += ' got ' + data.length + ' bytes';
            });
            file.on('end', function() {
                // console.log('File [' + fieldname + '] Finished');
            });
        });
        busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
            // console.log('Field [' + fieldname + ']: value: ' + inspect(val));
            resData[fieldname] = 'Field [' + fieldname + ']: value: ' + inspect(val);
        });
        busboy.on('finish', function() {
            // console.log('Done parsing form!');
            // res.writeHead(303, {
            //     Connection: 'close',
            //     Location: '/'
            // });
            res.json(resData);
        });
        req.pipe(busboy);


    },
    index(req, res, next) {
        Test.find()
            .exec((err, docs) => {
                if (err) {
                    res.end(err);
                } else {
                    res.render('test', {
                        data: docs
                    });
                }
            });
    }
};
