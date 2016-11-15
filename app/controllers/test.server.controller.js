'use strict';
const mongoose = require('mongoose');
const Test = mongoose.model('Test');
module.exports = {
    removeAll: (req, res, next) => {
        Test.remove({}, (err) => {
            if (err) {
                return next(err);
            } else {
                res.end('Ques all removed!')
            }
        });
    },
    addData: (req, res, next) => {
        const count = req.query.count || 10;
        for (let i = 0; i < count; i++) {
            new Test({
                time: Date.now(),
                rand: Math.random()
            }).save((err) => {
                if (err) {
                    return next(err);
                }
            });
        }
        res.end('add ' + count + ' data');
    },
    getData: (req, res, next) => {
        Test.find()
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
    index: (req, res, next) => {
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
