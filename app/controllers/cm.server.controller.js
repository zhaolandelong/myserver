'use strict';
const mongoose = require('mongoose');
const Ques = mongoose.model('Ques');
const User = mongoose.model('User');
var resData = {
    code: 0,
    msg: 'success!'
};

module.exports = {
    getQues: function(req, res, next) {
        var page = +req.query.page || 1,
            pageSize = +req.query.pageSize || 10;
        Ques.count({}, function(err, count) {
            if (err) {
                return next(err);
            } else {
                var total = count,
                    totalPage = Math.ceil(total / pageSize);
                if (totalPage < page || page < 1) {
                    return next();
                } else {
                    Ques.find()
                        .skip((page - 1) * pageSize)
                        .limit(pageSize)
                        .exec(function(err, docs) {
                            if (err) {
                                res.end(err);
                            } else {
                                resData.data = {
                                    datas: docs,
                                    page: page,
                                    pageSize: pageSize,
                                    total: total,
                                    totalPage: totalPage
                                };
                                res.json(resData);
                            }
                        });
                }
            }
        });
    },
    getOne: function(req, res, next) {
        var query = req.query;
        if (!query.id) {
            res.end('id is required!')
        } else {
            Ques.findById(query.id).exec(function(err, doc) {
                if (err) {
                    next(err);
                } else {
                    resData.data = doc;
                    res.json(resData);
                }
            });
        }
    },
    postQues: function(req, res, next) {
        new Ques({
            ask: req.body
        }).save(function(err) {
            if (err) {
                return next(err);
            } else {
                res.json(resData);
            }
        });
    },
    postAns: function(req, res, next) {
        var query = req.body;
        if (!query.id) {
            res.end('id is required!')
        } else {
            Ques.findByIdAndUpdate(query.id, {
                ans: {
                    name: query.name,
                    txt: query.txt,
                    time: query.time || Date.now()
                }
            }, function(err) {
                if (err) {
                    next(err);
                } else {
                    res.json(resData);
                }
            });
        }
    },
    delQues: function(req, res, next) {
        var query = req.body;
        if (!query.id) {
            res.end('id is required!')
        } else {
            Ques.findByIdAndRemove(query.id, function(err) {
                if (err) {
                    res.end(err);
                    // next(err);
                } else {
                    res.json(resData);
                }
            });
        }

    },
    testAddOne: function(req, res, next) {
        var data = {
            ask: {
                name: 'cm' + Math.round(Math.random() * 10000, 4),
                txt: '你知道后面有几位数字吗——' + Math.random()
            },
            ans: {
                name: 'zldl' + Math.round(Math.random() * 10000, 4),
                txt: '有好多好多位',
                time: Date.now()
            }
        };
        new Ques(data).save(function(err) {
            if (err) {
                console.log(err);
                return next(err);
            } else {
                resData.data = data;
                res.json(resData);
            }
        });
    },
    testAdd: function(req, res, next) {
        var daode = ['道德经', '第一章', '道可道非常道', '名可名非常名', '无名天地之始', '有名万物之母', '故常无欲以观其妙', '常有欲以观其徼', '二者同出而异名', '同谓之玄', '玄之又玄', '众妙之门'];
        for (var i = 0; i < daode.length; i += 2) {
            new Ques({
                ask: {
                    name: 'cm',
                    txt: daode[i]
                },
                ans: {
                    name: 'zldl',
                    txt: daode[i + 1],
                    time: Date.now()
                }
            }).save(function(err) {
                if (err) {
                    console.log(err);
                    return next();
                }
            });
        }
        res.json(resData);
    },
    testRemove: function(req, res, next) {
        Ques.remove({}, function(err) {
            if (err) {
                return next(err);
            } else {
                res.end('Ques all removed!')
            }
        })
    },
    addUser: (req, res, next) => {
        console.log(req.body);
        let query = req.body;
        new User(query).save((err) => {
            if (err) {
                return next(err);
            } else {
                res.json(resData);
            }
        });
    },
    getUsers: (req, res, next) => {
        var page = +req.query.page || 1,
            pageSize = +req.query.pageSize || 10;
        User.count({}, function(err, count) {
            if (err) {
                return next(err);
            } else {
                var total = count,
                    totalPage = Math.ceil(total / pageSize);
                if (totalPage < page || page < 1) {
                    return next();
                } else {
                    User.find()
                        .skip((page - 1) * pageSize)
                        .limit(pageSize)
                        .exec(function(err, docs) {
                            if (err) {
                                res.end(err);
                            } else {
                                resData.data = {
                                    datas: docs,
                                    page: page,
                                    pageSize: pageSize,
                                    total: total,
                                    totalPage: totalPage
                                };
                                res.json(resData);
                            }
                        });
                }
            }
        });
    }
};
