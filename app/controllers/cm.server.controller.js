const mongoose = require('mongoose');
const CMask = mongoose.model('CMask');
const CMans = mongoose.model('CMans');
const CMall = mongoose.model('CMall');
const CMpage = mongoose.model('CMpage');
var CMres = {
    code: 1,
    msg: 'success!'
};

module.exports = {
    getAll: function(req, res, next) {
        var page = +req.query.page || 1,
            pageSize = +req.query.pageSize || 5;
        CMall.count({}, function(err, count) {
            CMall.find()
                .skip((page - 1) * pageSize)
                .limit(pageSize)
                .exec(function(err, docs) {
                    console.log(docs);
                    docs.each(function () {
                        console.log(this)
                    });
                    if (err) {
                        return next(err);
                    } else {
                        CMres.data = new CMpage({
                            data: docs,
                            page: page,
                            pageSize: pageSize,
                            total: count,
                            totalPage: Math.ceil(count / pageSize)
                        });
                        res.json(CMres);
                    }
                });
        });
    },
    getAns: function(req, res, next) {
        res.end();
    },
    getAsk: function(req, res, next) {
        res.end();
    },
    postAll: function(req, res, next) {
        res.end();
    },
    postAns: function(req, res, next) {
        res.end();
    },
    postAsk: function(req, res, next) {
        var ask = new CMask(req.body);
        ask.save(function(err) {
            if (err) {
                return next(err);
            } else {
                return res.json(ask);
            }
        });
    },
    testRemove: function(req, res, next) {
        CMall.remove({}, function(err) {
            if (err) {
                console.log(err);
            }
            res.end();
        });
    },
    testAdd: function(req, res, next) {
        var data = [{
            ask: {
                name: 'cm',
                txt: '道德经第一章'
            }
        }, {
            ask: { //提问
                name: 'cm', //提问者姓名
                txt: '道可道非常道' //提问内容
            },
            ans: { //回答
                name: 'zldl', //回答者姓名
                txt: '名可名非常名' //回答内容
            }
        }, {
            ask: {
                name: 'cm',
                txt: '无名天地之始'
            },
            ans: {
                name: 'zldl',
                txt: '有名万物之母'
            }
        }, {
            ask: {
                name: 'cm',
                txt: '故常无欲以观其妙'
            },
            ans: {
                name: 'zldl',
                txt: '常有欲以观其徼'
            }
        }, {
            ask: {
                name: 'cm',
                txt: '二者同出而异名'
            },
            ans: {
                name: 'zldl',
                txt: '同谓之玄'
            }
        }, {
            ask: {
                name: 'cm',
                txt: '玄之又玄'
            },
            ans: {
                name: 'zldl',
                txt: '众妙之门'
            }
        }];
        for (var i = 0; i < data.length; i++) {
            new CMall(data[i]).save(function(err) {
                if (err) {
                    console.log(err);
                }
            });
        }
        res.end('finish!');
    },
    testAddOne: function(req, res, next) {
        new CMall({
            ask: new CMask({
                name: 'cm',
                txt: '玄之又玄'
            }),
            ans: new CMans({
                name: 'zldl',
                txt: '众妙之门'
            })
        }).save(function(err) {
            if (err) {
                console.log(err);
                res.end(err);
            } else {
                res.end('success!')
            }
        });
    }
};
