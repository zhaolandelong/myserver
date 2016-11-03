const mongoose = require('mongoose');
const Ques = mongoose.model('Ques');

module.exports = {
    getQues: function(req, res, next) {
        var page = +req.query.page || 1,
            pageSize = +req.query.pageSize || 10;
        Ques.count({}, function(err, count) {
            Ques.find()
                .skip((page - 1) * pageSize)
                .limit(pageSize)
                .exec(function(err, docs) {
                    if (err) {
                        res.end(err);
                    } else {
                        var data = {
                            data: {
                                datas: docs,
                                page: page,
                                pageSize: pageSize,
                                total: count,
                                totalPage: Math.ceil(count / pageSize)
                            },
                            code: 1,
                            msg: 'success'
                        }
                        res.json(docs);
                    }
                });
        });
    },
    postQues: function(req, res, next) {
        new Ques({
            ask: res.body
        }).save(function(err) {
            if (err) {
                console.log(err);
                res.end(err);
            } else {
                res.end('success!');
            }
        });
    },
    testAddOne: function(req, res, next) {

    },
    testAdd: function(req, res, next) {

    },
    testRemove: function(req, res, next) {

    }
};
